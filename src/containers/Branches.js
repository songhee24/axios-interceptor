import {useEffect, useState} from "react";
import {getAllBranches} from "../api/branchesApi";

export const Branches = () => {
    const [branches, setBranches] = useState([])

    const fetchBranches = async () => {
        try {
            const response = await getAllBranches()
            setBranches(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchBranches()
    }, [])


    if (branches?.length) {
        return (
            <ul>
                {branches.map((branch) => <li key={branch.id}>{branch.address}</li>)}
            </ul>
        )
    }

    return <p>Nothing found</p>
}
