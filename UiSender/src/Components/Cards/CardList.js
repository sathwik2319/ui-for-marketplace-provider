import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '3px white'
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export default function CardList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className="custom-edit,`${classes.card}`">
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://picsum.photos/800/315/?random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {"venue "+card}
                    </Typography>
                    <Typography>
                      This is a description of venue {card}.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Link to="/checkout">
                    <Button size="small" color="primary">
                      
                      Book Now
                      
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
/*
import React, { Component } from 'react';
import './ItemCard.css'

export default class CardList extends Component {
  render() {
    return (




    );
  }
}

<div className="flex-container">
        <div className="Column">

          <div className="card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="https://picsum.photos/800/315/?random" alt="card-img" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
              <p><a href="#">This is a link</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>

        </div>



        <div className="Column">

          <div className="card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="https://picsum.photos/800/312/?random" alt="card-img" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
              <p><a href="#">This is a link</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div>

        <div className="Column">
          <div className="card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="https://picsum.photos/800/311/?random" alt="card-img" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
              <p><a href="#">This is a link</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div>
      </div>
*/