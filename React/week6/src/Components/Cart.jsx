import { React, useState, useMemo } from 'react'

const Cart = () => {

    const [items, setItems] = useState([
        {
            name: 'Candy',
            price: 20
        },
        {
            name: 'Pens',
            price: 40
        },
        {
            name: 'Soap',
            price: 50
        },
        {
            name: 'Fruits',
            price: 80
        },
    ])
    const total = useMemo(() => {
        return items.reduce((total, item) => total + item.price, 0);
    })
    return (
        <>
            {
                items.map((item, index) => {
                    // total += item.price
                    return (
                        < div key={index} >
                            {item.name}  {item.price}
                        </div >
                    )

                })
            }
            <div>TOTAL PRICE IS : {total}</div>
        </>
    )
}

export default Cart