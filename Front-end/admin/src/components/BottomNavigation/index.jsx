import React from 'react';
import { useHistory} from 'react-router-dom';
import './styles.css';
import { FaAppStoreIos, FaUserCircle } from 'react-icons/fa';
import Icon from '@material-ui/core/Icon';
function BottomNavigation(props) {
	
	// name: 'Cadastro',
	// icon: 'home'

	const {
		value
	} = props;

	function handleClick (value){
		props.passChildData(value);        
	}

	return (
		<div className="body_bottom_navigation">
			{value.map((bottom) =>
			
			<button  id="item_bottom_navigation" 
				onClick={()=>{handleClick(bottom.name)}}
			>
				<Icon id="item_icon_bottom">{bottom.icon}</Icon>

				{bottom.name}
			</button>
			)}
			
		</div>
	)
}

export default BottomNavigation;