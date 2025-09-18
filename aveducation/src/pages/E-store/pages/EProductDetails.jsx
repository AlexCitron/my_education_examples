import {useParams} from "react-router-dom";

export default function EProductDetails() {
    const { productId} = useParams()

    return (
        <div className={'product-details-page'}>
            <p>ProductDetails Page</p>
            <p>Product param: { productId }</p>
        </div>
    )
}