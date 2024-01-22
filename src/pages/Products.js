import {Link} from "react-router-dom";

const ProductsPage = () => {
	const PRODUCTS = [
		{ id: '1', title: 'Product 1'},
		{ id: '2', title: 'Product 2'},
		{ id: '3', title: 'Product 3'},
	]

	return (
		<>
			<h1>This is my products page</h1>
			<ul>
				{PRODUCTS.map(prod => (
					<li>
						<Link to={prod.id}>{prod.title}</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default ProductsPage;