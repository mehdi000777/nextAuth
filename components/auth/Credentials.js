import React, { useState } from 'react';
import Btnlogin from './Btnlogin';

const Credentials = ({ providers, csrfToken }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <Btnlogin provider={providers.credentials} bgColor="gray" csrfToken={csrfToken} options={{ redirect: false, email, password }}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-control w-100"
                    placeholder="example@mail.com" required value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className="form-control w-100"
                    required value={password} onChange={e => setPassword(e.target.value)} />
            </div>
        </Btnlogin>
    )
}

export default Credentials;
