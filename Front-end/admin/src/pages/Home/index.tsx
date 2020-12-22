import React from 'react';
import Nav from '../../components/Nav_dash';
import TitlePage from '../../components/TitlePage';
import './styles.css';
const Home: React.FC = () => {
	return (
		<>
			<Nav />
			<div className='divBody'>
				<TitlePage title="Home" />

				<div className="body-page">
					<h1>asdas</h1>
				</div>
			</div>
		</>
	)
}

export default Home;