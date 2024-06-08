import { useState } from "react";
import Product from "./Product";

const ShoppingHome = () => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0.0)
    const [tax, setTax] = useState(0.0)
    const [finalBill, setFinalBill] = useState(0.0)

    const [productList, setProductList] = useState([
        {
            id: 101,
            productName: 'shirts',
            price: 35.99,
            quantity: 0
        }, {
            id: 102,
            productName: 't-shirts',
            price: 25.99,
            quantity: 0
        }, {
            id: 103,
            productName: 'watch',
            price: 120.00,
            quantity: 0
        }, {
            id: 104,
            productName: 'shoes',
            price: 80.00,
            quantity: 0
        }, {
            id: 105,
            productName: 'wallet',
            price: 59.99,
            quantity: 0
        }
    ])

    const onCheckoutClicked = () => {
        let sum = 0

        cart.forEach(item => {
            sum += item.price * item.quantity
        })

        setTotal(sum)

        let tempTax = sum * 0.13
        setTax(tempTax)

        let bill = sum + tempTax
        setFinalBill(bill)
    }

    //define a function to receive data from child
    const receiveQuantity = (dataFromChild) => {
        //process the data received from child
        let tempCrat = [...cart]

        tempCrat.push(dataFromChild)
        console.log(`tempcart :${JSON.stringify(tempCrat)}`)
    }

    return(
        <div>
            <h1>Shopping Store</h1>

            <div>
                <h2>Products Information</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Products ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        {
                            productList.map( (prod) => (
                                //associate the function as a prop to receive the data from a child
                                <Product currentProduct = {prod} updateQuantity = {receiveQuantity} />
                            ) )
                        }
                    </tbody>
                </table>
            </div>

            <div>
                <h2>Checkout Information</h2>
                <button onClick={onCheckoutClicked} >Checkout</button>
                <h3>Total : C$ {total.toFixed(2)}</h3>
                <h3>Tax : C$ {tax.toFixed(2)} @ 13%</h3>
                <h3>Final Bill : C$ {finalBill.toFixed(2)}</h3>
            </div>
        </div>
    )
}

export default ShoppingHome