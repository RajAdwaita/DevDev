import React, { useState } from 'react'
import Axios from 'axios'
const Transactions = () => {
    const [to, setTo] = useState('')
    const [amount, setAmount] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/api/v1/account/transfer',
            {
                to: to,
                amount: amount
            },
            {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM1OTY1YWYwMmQ3ZTk1OGVhZmIxNTQiLCJ1c2VyTmFtZSI6InVzZXIyIiwiaWF0IjoxNzI0MjI1MjA5fQ.K-LCVHMlnVzlJvmAOfsUmI5swjtWUxozrPIkZ5SIidk'

                }
            }
        )
    }
    return (
        <>

            <div className="container">
                <div>
                    <h4>Transaction Portal</h4>
                </div>
                <div>
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <p>Send to</p>
                        <input type="text" placeholder='To' onChange={(e) => {
                            setTo(e.target.value)
                        }} />
                        <p>Amount</p>
                        <input type="text" placeholder='Amount' onChange={(e) => {
                            setAmount(e.target.value)
                        }} />

                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>



        </>
    )
}

export default Transactions