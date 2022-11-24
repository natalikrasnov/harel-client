import { useEffect } from "react"
import { useNavigate, useLoaderData } from "react-router-dom"
import { saveCustomer } from "../service/HTTPrequests"
import { stringsHE } from "../utils/strings"

export function Edit({ }) {
    const navigate = useNavigate()
    const customer = useLoaderData()

    useEffect(() => {
        if (!customer) goBack();
    }, [customer])

    const save = async (event) => {
        event?.preventDefault()
        const formData = {
            email: event.target.email.value,
            name: event.target.name.value,
            lastName: event.target.lastName.value,
            bankAccount: event.target.bankAccount.value
        }
        const savedCustomer = await saveCustomer({ ...customer, ...formData })
        console.log("save response", savedCustomer)
        if (!savedCustomer) alert ("error, try again") 
        else {
            alert("success!")
            goBack()
        }
        
    }

    const goBack = (e) => {
        e?.preventDefault();
        navigate(`/home`)
    }

    return (
        <form className="login" onSubmit={save}>
            <input id="email" placeholder={stringsHE.email} defaultValue={ customer.email} />
            <input id="name" placeholder={stringsHE.name} defaultValue={customer.name} />
            <input id="lastName" placeholder={stringsHE.lastName} defaultValue={customer.lastName} />
            <span>..............</span>
            <input id="bankAccount" placeholder={stringsHE.bankAccount} defaultValue={customer.bankAccount} />
            <div className="buttons">
                <button type="submit" >{stringsHE.save}</button>
                <button onClick={goBack}>{stringsHE.back}</button>
            </div>
        </form>
    )
}