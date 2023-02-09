import './App.css';
import {useEffect, useMemo, useState} from "react";
import axios from "axios";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQURNSU4iLCJwaG9uZU51bWJlciI6Iig2MjkpIDU1NS0wMTI5IiwiZXhwIjoxNjc2NzMyNjU0LCJpYXQiOjE2NzU4Njg2NTQsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIn0.Sz63OlUjRwm0kzmXkd5txAEbELqZ5PtLlerejPE3DdCDUmiukyAfh-vpODwzb0hsyExLzznlvg1kCOiailZLYA'

function App() {
    const [payments, setPayments] = useState([])

    useEffect(() => {
        axios.get('http://159.65.142.42/api/branches', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
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
