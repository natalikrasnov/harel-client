import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../service/HTTPrequests"
import { stringsHE } from "../utils/strings"

export function Login({ }) {
    const navigate = useNavigate()

    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    const doLogin = async (event) => {
        event.preventDefault()
        const formData = {
            email: event.target.email.value,
            name: event.target.name.value,
            lastName: event.target.lastName.value,
            password: event.target.password.value
        }
        
        const loginResponse = await login(formData)
        if (loginResponse) navigate(`/home`)
        return false

    }

    const onEmailInputChange = (e) => {
        const email = e.target.value
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) setIsEmailValid(false)
        else setIsEmailValid(true)
    }

    const onPasswordInputChange = (e) => {
        const password = e.target.value
        if (!password || !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$/.test(password))
            setIsPasswordValid(false)
        else setIsPasswordValid(true)
    }

    return (
        <form className="login" onSubmit={doLogin}>
            <input id="email"
                placeholder={stringsHE.email}
                className={!isEmailValid ? "error" : ''}
                onChange={ onEmailInputChange}
            />
            <input id="name" placeholder={stringsHE.name} />
            <input id="lastName" placeholder={stringsHE.lastName} />
            <input id="password"
                placeholder={stringsHE.password}
                className={!isPasswordValid ? "error" : ''}
                onChange={onPasswordInputChange}
                type="password"
            />
            <button type="submit"
                disabled={!isEmailValid || !isPasswordValid} >
                {stringsHE.loginSubmit}
            </button>
        </form>
    )
}