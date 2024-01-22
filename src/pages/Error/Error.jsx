import classes from './Error.module.css'
import React from 'react';

const Error = props => {
	return (
		<div className={classes.Error}>
			<h1>An error occurred!</h1>
			<p>Could not find this page!</p>
		</div>
	)
}

export default Error