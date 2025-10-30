import { useParams } from "react-router"

const ProductDetails = () => {
    const { id } = useParams();
    return (
        <div>Showing details of : {id}</div>
    )
}
export default ProductDetails