import React from 'react';
import './styles.css'
import { FaAppStoreIos, FaUserCircle } from 'react-icons/fa';
const Nav: React.FC = () => {
	return (
		<body>
			<div id="lateral">
				<div id="menu">

					<a href="/profileADM"><FaUserCircle size={64} id="img_user" /></a>

					<ul className="box">
						<li><a href="/home">Home <span id="icon" ><FaAppStoreIos size={37} /></span></a></li>
						<li><a href="/controls">Controle <span id="icon" ><FaAppStoreIos size={37} /></span></a></li>
						<li ><a href="/#">Estoque<span id="icon" ><FaAppStoreIos size={37} /></span></a></li>
						<li ><a href="/#">Sair <span id="icon" ><FaAppStoreIos size={37} /></span></a></li>

						<li ><a href="/#"><span id="icon" className='icon-logof'><FaAppStoreIos size={37} /></span></a></li>
					</ul>
				</div>
			</div>
		</body>
	)
}

export default Nav;