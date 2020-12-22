import React from 'react';
import { Grid, Card, TextField, Button } from '@material-ui/core';
import { useHistory, Link, } from 'react-router-dom';
import './styles.css';
const Login: React.FC = () => {
  const history = useHistory();

  async function handleLogin(e: any) {
    e.preventDefault();
    console.log('adas')
    history.push("/home");
  }

  return (
    <body>
      <Card className="container" >
        <Grid container spacing={0}>

          <Grid md={6} sm={12} xs={12}>

            <p id="title">Login</p>
            <form noValidate autoComplete="off" onSubmit={handleLogin}>
              <Grid md={12} className="form_inpurt">
                <TextField id="standard-basic" label="Email" fullWidth />
              </Grid>
              <Grid md={12} className="form_inpurt">
                <TextField id="standard-basic" label="Senha" fullWidth />
              </Grid>
              <p id='link'>Não tem conta? <a href="url" >cadastre-se</a></p>
              <Button variant="contained" className="button" color="primary" type='submit'>
                Acessar
              </Button>
            </form>
          </Grid>
          <Grid md={6} sm={12} xs={12} id="img">
          </Grid>

        </Grid>

      </Card>
    </body>

  )
}

export default Login;