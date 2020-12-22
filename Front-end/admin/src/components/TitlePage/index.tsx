import React from 'react';
import './styles.css';
function TitlePage(props: any) {
	const {
		title
	} = props
	return (
		<>
			<h1 id="title_h1">{title}</h1>
			<div className="line"></div>
		</>
	)
}

export default TitlePage;