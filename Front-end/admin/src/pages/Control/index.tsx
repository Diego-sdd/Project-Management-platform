import React, { useState } from 'react';
import './styles.css';
import Nav from '../../components/Nav_dash';
import TitlePage from '../../components/TitlePage';
import BottomNavigation from '../../components/BottomNavigation';
import CreatedControls from './created';
import Home from './home';

const ValueTitleBottom = [
	{
		name: 'Home',
		path: '/home',
		icon: 'start'
	},
	{
		name: 'Cadastro',
		path: '#',
		icon: 'add_circle'
	}]
const Controls: React.FC = () => {
	const [childData, setChildData] = useState("Home");

	return (
		<>
			<Nav />
			<div className='divBodyControls '>
				<TitlePage title="Controle de Estoque" />
				<BottomNavigation value={ValueTitleBottom} passChildData={setChildData} />
				<div className="body-pageControls ">
					{
						childData === 'Home' && (

							<Home />

						)
					}
					{
						childData === 'Cadastro' && (

							<CreatedControls />
						)
					}
				</div>
			</div>
		</>
	)
}

export default Controls;