import React from 'react'
import Btnlogin from './Btnlogin'

const OAuth = ({ providers, csrfToken }) => {
    return (
        <div>
            <Btnlogin provider={providers.google} csrfToken={csrfToken} bgColor="#f2573f" />
            <Btnlogin provider={providers.github} csrfToken={csrfToken} bgColor="#444" />
        </div>
    )
}

export default OAuth
