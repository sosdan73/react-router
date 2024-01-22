import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
	const navigate = useNavigate();

	function navigateHandler() {
		navigate('/products');
	}

	return <>
		<h1>This is my home page</h1>
		<p>Go to <Link to="products">the list of products</Link></p>
		<button onClick={navigateHandler}>Go to the list of products</button>
	</>
}

export default HomePage;