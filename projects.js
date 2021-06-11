import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import clock from '../clock.png'
import portfolio from '../portfolio.png'
import quiz from '../quiz.png'

export default function projects() {

  return (
    <div className="cardrow">
    <Card className="root">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={clock}
        />
        <CardContent>
          <p style={{color:'grey',fontSize:18,fontFamily:'cursive'}}>clock appliaction consists of stopwatch,timer,alarm</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  style={{marginLeft:80}}variant="outlined" size="small" color="primary">
          Know More
        </Button>
      </CardActions>
    </Card>
    <Card className="root">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={portfolio}
        />
        <CardContent>
          <p style={{color:'grey',fontSize:18,fontFamily:'cursive'}}>A simple portfolio describing about skills,projects,details</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{marginLeft:80}} variant="outlined" size="small" color="primary">
          Know More
        </Button>
      </CardActions>
    </Card>
    <Card className="root">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={quiz}
        />
        <CardContent
        height="300px"
        >
          <p style={{color:'grey',fontSize:18,fontFamily:'cursive'}}> A beautiful quiz application with interesting questions</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{marginLeft:80}} variant="outlined" size="small" color="primary">
          Know More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
