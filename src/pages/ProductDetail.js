import {useParams, Link} from "react-router-dom";

function ProductDetailPage() {
	const params = useParams();
	const id = params.productId

	return <>
		<h1>Product Details page </h1>
		<p>Products id is {id}</p>
		<p><Link to=".." relative="path">Back</Link></p>
	</>
}

export default ProductDetailPage;