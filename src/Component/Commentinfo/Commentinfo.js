import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 125,
    marginTop: 10,
  },

}));
const Commentinfo = (props) => {
  const classes = useStyles();

  const { name, email, body, id, postId } = props.comment;

  return (
    <Card className={classes.root}>
      <CardHeader
     
        title={name}
        subheader={email}
      />

      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Commentinfo;
