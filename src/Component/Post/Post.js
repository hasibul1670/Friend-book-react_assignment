import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comment/Comment';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 19,
    },
  });
  const Post = (props) => {
    const {id,userId,title,body}=props.post;


        const classes = useStyles();
        const bull = <span></span>;
    return (
        
 

        <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title}gutterBottom> Post No:
         {id}
        </Typography>
        <Typography className={classes.title}gutterBottom>
         {title}
        </Typography>
        <Typography className={classes.pos} color= 'primary'>
          {body}
        </Typography>

      </CardContent>

      <CardActions>
      {props.home && (
          <Link to={`/Comment/${id}`}>
            <Button  variant="contained" color="primary">See More</Button>
          </Link>
        )}
        {!props.home && <Comments key={id} id={id}></Comments>}
      </CardActions>
    </Card>

        
    );
};

export default Post;