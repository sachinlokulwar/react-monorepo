import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserCard from './userCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function UserList({users}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridList}>
        {users && users.map(user => {
            return (
                <Grid item xs={3}>
                    <UserCard user={user}/>
                </Grid>
            )
        })}
        
      </Grid>
    </div>
  );
}
