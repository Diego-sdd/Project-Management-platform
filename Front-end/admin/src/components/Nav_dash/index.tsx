import React from 'react';
import './styles.css'
import { FaAppStoreIos, FaUserCircle } from 'react-icons/fa';
const Home: React.FC = () => {
	return (
		<body>
			<div id="lateral">
				<div id="menu">

					<FaUserCircle size={80} id="img_user" />

					<ul className="box">
						<li><a href="#">Home <span id="icon" ><FaAppStoreIos size={37} /></span></a></li>
						<li><a href="#">Controle <span id="icon" ><FaAppStoreIos size={37} /></span></a></li>
						<li ><a href="#">Estoque<span id="icon" ><FaAppStoreIos size={37} /></span></a></li>
						<li ><a href="#">Sair <span id="icon" ><FaAppStoreIos size={37} /></span></a></li>
					</ul>
				</div>
			</div>
		</body>
	)
}

export default Home;