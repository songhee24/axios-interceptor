import {useEffect, useState} from "react";

export const Branches = () => {
    const [branches, setBranches] = useState([])


    useEffect(() => {

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
