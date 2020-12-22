import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 200,
	},
});
const data = ['01', '02', '03', '04']
export default function MediaCard() {
	const classes = useStyles();

	return (
		<Grid container spacing={6} direction="row" alignItems="center" justify="center">
			{data.map(() =>

				<Grid xl={3} item>
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://lh3.googleusercontent.com/proxy/NCfqZanOXj3T3DQnQ56QuW-A5ZUdtney2_cFO8khQOyePPnnR7pzjyQkKWB7oPwFQfiHgDlfAq6pOczVduYTkTROL2yJMB9DfJLXGHGzUrD9FX6PpY1KObD0xx_m72Rc4jJExKU"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<CardActions>
									<Typography gutterBottom variant="h6" align="center" component="h2" >
										Porção de batata
									</Typography>


								</CardActions>
								<Typography gutterBottom variant="h6" component="h2" color="error">
									R$ 10.00
							</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
									across all continents except Antarctica
          			</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
        </Button>
							<Button size="small" color="primary" >
								Learn More
        </Button>
						</CardActions>
					</Card>
				</Grid>
			)}


		</Grid>
	);
}