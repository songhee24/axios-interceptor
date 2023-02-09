import './App.css';
import {useEffect, useMemo, useState} from "react";
import axiosInstance from "./config/axiosInstance";


function App() {
    const [branches, setBranches] = useState([])

    useEffect(() => {
        axiosInstance.get('')
            .then(r => {
                console.log(r)
                setBranches(r.data)
            })
            .catch(e => console.log(e))

    }, [])

    const renderPayments = useMemo(() => {
        let content = <p>Not Found!</p>

        if (branches?.length !== 0) {
            content = branches.map(payment => <li key={payment.id}>{payment.address}</li>)
        }

        return <ul>{content}</ul>

    }, [branches])

    return (
        <div className="App">
            {renderPayments}
        </div>
    );
}

export default App;
