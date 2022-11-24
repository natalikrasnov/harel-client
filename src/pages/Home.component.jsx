import { useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import { Filter } from "../components/Filter.component"
import { Table } from "../components/Table.component"

export function Home({ }) {
    const navigate = useNavigate()
    const {customers} = useLoaderData()
    const [filteredCustomers, setFilteredCustomers] = useState(null)

    const onFilterChange = (event)=> {
        const filterBy = event?.target?.value.trim()
        if (!filterBy) setFilteredCustomers(null)
        else setFilteredCustomers([
            ...customers.filter(customer =>
                    JSON.stringify(Object.values(customer)).includes(filterBy)
                )
        ])
    }

    const goEditCustomer = (id) => {
        navigate(`/edit/${id}`, {id})
    }

    return (
        <div className="home">
            <Filter onChange={onFilterChange}/>
            <Table data={filteredCustomers || customers} onSelectCustomer={ goEditCustomer } />
        </div>
    )
}