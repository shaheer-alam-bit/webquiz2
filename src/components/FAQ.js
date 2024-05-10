import axios from "axios";
import { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useSelector } from "react-redux";

const FAQ = () => {
    const [faqData, setfaqData] = useState([]);
    const token = useSelector(state => state.user.token);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await axios.get('https://sandbox.practical.me/api/faq' , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        NotificationManager.success(response.data.message, "Success!");
        setfaqData(response.data.data);
    }

    return(
        <div>
            <h1>FAQ</h1>
            {faqData.map((faq) => {
                return (
                    <div key={faq.id}>
                        <h2>{faq.question}</h2>
                        <p>{faq.answer}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FAQ;