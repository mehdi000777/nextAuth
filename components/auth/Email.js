import React, { useState } from 'react';
import Btnlogin from './Btnlogin';

const Email = ({ providers, csrfToken }) => {
    const [email, setEmail] = useState();

    return (
        <Btnlogin provider={providers.email} bgColor="#22b05b" csrfToken={csrfToken} options={{ email }}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" className="form-control w-100"
                    placeholder="example@mail.com" required value={email} onChange={e => setEmail(e.target.value)} />
            </div>
        </Btnlogin>
    )
}

export default Email
