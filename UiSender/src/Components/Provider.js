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
import CommonBar from './Nav-Bar/Common-bar';



    const useStyles = makeStyles(theme => ({
        icon: {
          marginLeft: theme.spacing(2),
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
        hover:{},
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
      
      const cards = [1, 2, 3];
      
      export default class Provider extends React.Component {

        constructor(props)
        {
          super(props);
          this.state={
            formOpen:false,
            cards :[1, 2, 3],shadow:1
          }

          this.addForm=this.addForm.bind(this);
        //  this.formSubmit=this.formSubmit.bind(this);
        }

        addForm(e){
          this.setState({formOpen:true})
        }


        onMouseOver = () => this.setState({ shadow: 3 });
onMouseOut = () => this.setState({ shadow: 1 });

        
        // addForm(e){
        //   e.preventDefault();
        //   // this.setState({cards:[...this.state.cards,4]})
        // }
         
      render()
      {
        return (
          <React.Fragment>
              <CommonBar/>
              <Typography>
                  <h6>Your Previous Listings</h6>
              </Typography>
            <main>
              <Container maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  {this.state.cards.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={3}>
                      <Card onMouseOver={this.onMouseOver}
   onMouseOut={this.onMouseOut}
   zDepth={this.state.shadow}>
                        <CardMedia
                          
                          image="https://picsum.photos/800/315/?random"
                          title="Image title"
                        />
                        <CardContent >
                          <Typography gutterBottom variant="h5" component="h2">
                            {"venue "+card}
                          </Typography>
                          <Typography>
                            This is a description of venue {card}.
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            Edit
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </main>
            <hr className="line"/>
            <br/>
            <Button className="btn btn-success " onClick={this.addForm}>Add Listing</Button>    
            
            {this.state.formOpen &&
            <Card>
            <div className="col s6 m3 form -div" md={3}>
        <form onSubmit={this.formSubmit}>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input type="text" id="title"/>
            <label for="title">Venue Name</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">message</i>
            <textarea id="message" class="materialize-textarea" cols="20" rows="20"></textarea>
            <label for="message">Description</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input type="text" id="file"/>
            <label for="file">Add FIle</label>
          </div>
          <div>
          <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
          </div>

          </form>
      </div>
      </Card>
            }
            <br/>
            <br/> 
            <br/>

                  
                  </React.Fragment>
        );
      }
    }