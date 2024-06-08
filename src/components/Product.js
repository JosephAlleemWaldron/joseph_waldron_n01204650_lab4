import { useState } from "react";
import Counter from "./Counter";

const Product = (props) => {

    const [quantity, setQuantity] = useState(props.currentProduct.quantity)

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
        // props.currentProduct.quantity = props.currentProduct.quantity + 1

        //send the data to parent component using the function received in props
        props.updateQuanity({})
    }

    const decrementQuantity = () => {

        if(quantity === 0){
            console.log(`quantity is 0 (zero). Cannot be decreased further.`);
            alert(`quantity is 0 (zero). Cannot be decreased further.`)
        }else{
            setQuantity(quantity - 1)
            // props.currentProduct.quantity = props.currentProduct.quantity - 1

            props.updateQuanity({})
        }
    }

    return(
        <tr>
            <td> { props.currentProduct.id}</td>
            <td> { props.currentProduct.productName}</td>
            <td> { props.currentProduct.price}</td>
            <td><button onClick={decrementQuantity} > - </button></td>
            {/* <td> object : { props.currentProduct.quantity}</td> */}
            <td> {quantity} </td>
            <td><button onClick={incrementQuantity} > + </button></td>

        </tr>
    )
}

export default Product




