import React, { useEffect } from 'react';
import { providers, getSession, csrfToken } from 'next-auth/client';
import { useRouter } from 'next/router'
import OAuth from '../components/auth/OAuth';
import Email from '../components/auth/Email';
import Credentials from '../components/auth/Credentials';
import { toast } from 'react-toastify';

const Login = ({ providers, session, csrfToken }) => {
    const router = useRouter();

    useEffect(() => {
        if (session) router.push("/");
    }, [session, router])

    useEffect(() => {
        if (router.query.error) {
            toast.error(router.query.error, { theme: "dark" });
        }
    }, [router])

    if (session) return null
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div style={{ maxWidth: "450px", width: "100%" }}
                className="border border-1 mx-auto p-4 shadow">
                <h2 className="text-uppercase text-center fw-bolder" style={{ color: "#555", letterSpacing: "1px" }}>
                    next auth app
                </h2>
                <p className="text-center">Login with NextAuth</p>

                <Credentials providers={providers} csrfToken={csrfToken} />
                <div className="text-center">✦ Or ✦</div>
                <OAuth providers={providers} csrfToken={csrfToken} />
                <Email providers={providers} csrfToken={csrfToken} />
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            providers: await providers(context),
            session: await getSession(context),
            csrfToken: await csrfToken(context),
        }
    }
}

export default Login
