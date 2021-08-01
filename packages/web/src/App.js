import React, {useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {getWelcomeString} from 'common/src/main';

import {selectUsers, fetchUsers, addUsers} from 'common/src/users/usersSlice';  
import UserList from './features/users/userList';
import { Button } from '@material-ui/core';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // useEffect(() => {
  //   console.log(users.users);
  // })

  const   addUser = () => {
    console.log('addUser');
    dispatch(addUsers());
  }

  return (
    <div className="App">
      <div className="page-header">
        <div className="page-header-item header"><h2>Users List</h2></div>
        <div className="page-header-item add-btn">
          <Button variant="contained" color="primary" onClick={() => addUser()}>
            Add users
          </Button>
        </div>
        
      </div>
      <UserList users={users.users} />
    </div>
  );
}

export default App;
