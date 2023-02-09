import './App.css';
import {useEffect, useMemo, useState} from "react";
import axiosInstance from "./config/axiosInstance";


function App() {
    const [branches, setBranches] = useState([])
    const [payments, setPayment] = useState([])

    useEffect(() => {
        axiosInstance.get('api/branches')
            .then(r => {
                console.log(r)
                setBranches(r.data)
            })
            .catch(e => console.log(e))
    }, [])

    useEffect(() => {
        axiosInstance.get('api/payment-methods')
            .then(r => setPayment(r.data))
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
