import React, { useState } from 'react';
import { Grid, TextField, Button, MenuItem, InputAdornment } from '@material-ui/core';
import './styles.css';
import ImageUploader from 'react-images-upload';
const currencies = [
	{
		value: 'Quilo',
		label: 'KG',
	},
	{
		value: 'Caixa',
		label: 'CX',
	}
];
const CreatedControls: React.FC = () => {
	const [currency, setCurrency] = React.useState('EUR');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrency(event.target.value);
	};

	const [pictures, setpictures] = useState({ pictures: [] });
	function onDrop(pictureFiles: any) {
		setpictures({
			pictures: pictureFiles
		});
	}

	return (
		<>


			<form noValidate autoComplete="off">
				<Grid container spacing={6} direction="row" alignItems="flex-start">
					<Grid xs={1} md={1} item className="form_inpurt">
						<TextField id="outlined-basic" label="Código" variant="outlined" fullWidth />
					</Grid>
					<Grid xs={5} md={5} item className="form_inpurt">
						<TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
					</Grid>

					<Grid xs={2} md={2} item className="form_inpurt">
						<TextField
							id="standard-select-currency"
							select
							label="Unidade"
							value={currency}
							onChange={handleChange}
							helperText="Please select your currency"
						>
							{currencies.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid xs={2} md={2} item className="form_inpurt">
						<TextField id="outlined-basic" label="Preço Unitário" variant="outlined" fullWidth
							InputProps={{
								startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
							}}
						/>
					</Grid>
					<Grid xs={2} md={2} item className="form_inpurt">
						<TextField id="outlined-basic" label="Unidade" variant="outlined" fullWidth />
					</Grid>
					<Grid xs={12} item  >
						<TextField
							id="outlined-multiline-static"
							label="Multiline"
							multiline
							rows={8}
							defaultValue="Default Value"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid xs={12} >
						<ImageUploader
							withIcon={true}
							withPreview={true}
							label="Insira uma imagem ou mais"
							// fileContainerStyle={{ padding: 0, marginTop: 35, height: 200 }}
							buttonText="Upload Images"
							onChange={onDrop}
							imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
							maxFileSize={1048576}
							fileSizeError=" file size is too big"
						/>
					</Grid>

					<Grid xs={12} >

						<Button variant="contained"
							className="button"
							color="primary"
							type='submit'>
							Cadastrar
										</Button>
					</Grid>

				</Grid>
			</form>
		</>
	)
}

export default CreatedControls;