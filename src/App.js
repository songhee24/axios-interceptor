import './App.css';
import {useEffect, useState} from "react";
import axiosInstance from "./config/axiosInstance";

const TitleList = (items ) => {
     let content = <p>Not Found!</p>

    console.log(items)
    if (items && items?.length !== 0) {
        content = items?.map(item => <li key={item.id}>{item?.address || item?.name}</li>)
    }

    return <ul>{content}</ul>
}

function App() {
    const [branches, setBranches] = useState([])
    const [payments, setPayments] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosInstance.get('api/branches')
            .then(r => {
                setBranches(r.data)
            })
            .catch(e => console.log(e))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        axiosInstance.get('api/payment-methods')
            .then(r => setPayments(r.data))
            .catch(e => console.log(e))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if(loading) {
        return <p>Loading...</p>
    }


    return (
        <div className="App">
            <TitleList items={payments} />
            <TitleList items={branches} />
        </div>
    );
}

export default App;
