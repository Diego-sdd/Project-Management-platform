import React from 'react';
import Nav from '../../components/Nav_dash';
import TitlePage from '../../components/TitlePage';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './styles.css';
const Profile: React.FC = () => {
	return (
		<>
			<Nav />
			<div className='divBody'>
				<TitlePage title="Perfil" />

				<div className="body-page-profile">
					<img id="img_profile" src="https://lh3.googleusercontent.com/proxy/NCfqZanOXj3T3DQnQ56QuW-A5ZUdtney2_cFO8khQOyePPnnR7pzjyQkKWB7oPwFQfiHgDlfAq6pOczVduYTkTROL2yJMB9DfJLXGHGzUrD9FX6PpY1KObD0xx_m72Rc4jJExKU" />

					<form noValidate autoComplete="off">
						<TextField id="standard-basic" label="Standard" />
						<TextField id="filled-basic" label="Filled" variant="filled" />
						<TextField id="outlined-basic" label="Outlined" variant="outlined" />
					</form>

				</div>
			</div>
		</>
	)
}

export default Profile;