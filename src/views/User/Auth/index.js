import React, { useState } from "react"
import LoginForm from "components/Form/LoginForm"
import SignUpForm from "components/Form/SignUpForm"
import { Message } from 'semantic-ui-react'
import "./index.scss"

const Auth = () => {

    const [isloginForm, setLoginForm] = useState(true)
    const [message, setMessage] = useState(null)

    const switchAction = () => {
        setLoginForm(!isloginForm)
    }

    const handleMessage = (message) => {
        setMessage(message)
    }

    return(
        <div className="login-container">
            <p>{isloginForm ? "Sign In" : "Sign Up"}</p>
            {message != null &&
                <Message className="error-message" info>
                    <Message.Header>{message}</Message.Header>
                </Message>
            }
            {isloginForm ? (
                <LoginForm switchSignUp={switchAction} />
            ):(
                <SignUpForm switchSignIn={switchAction} setMessage={handleMessage} />
            )}
            
        </div>
    )
}

export default Auth