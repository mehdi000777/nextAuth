import React, { useState } from 'react';
import { signIn } from 'next-auth/client';
import Loading from '../loading';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Btnlogin = ({ children, provider, bgColor, textColor = "#eee", csrfToken, options }) => {
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await signIn(provider.id, options);
        setLoading(false);

        if (provider.id === "credentials") {
            if (res.error) {
                if (res.error === "Success! Check your email.") {
                    signIn("email", { email: options.email });
                    return toast.success(res.error, { theme: "dark " });
                }
                return toast.error(res.error, { theme: "dark" });
            }

            router.push("/");
        }
    }

    return (
        <>
            {
                loading && <Loading />
            }
            <form onSubmit={submitHandler}>
                <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
                {children}
                <button type="submit" className="btn w-100 my-2 py-3" style={{ backgroundColor: bgColor, color: textColor }}>
                    Sign in with {provider.name}
                </button>
            </form>
        </>
    )
}

export default Btnlogin
