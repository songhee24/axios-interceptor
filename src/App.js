import './App.css';
import {useEffect, useMemo, useState} from "react";
import axios from "axios";

function App() {
    const [payments, setPayments] = useState([])

    useEffect(() => {
        axios.get('http://159.65.142.42/api/payment-methods')
            .then(r => {
                console.log(r)
                setPayments(r.data)
            })
            .catch(e => console.log(e))

    }, [])

    const renderPayments = useMemo(() => {
        let content = <p>Not Found!</p>

        if (payments?.length !== 0) {
            content = payments.map(payment => <li key={payment.id}>{payment.name}</li>)
        }

        return <ul>{content}</ul>

    }, [payments])

    return (
        <div className="App">
            {renderPayments}
        </div>
    );
}

export default App;
