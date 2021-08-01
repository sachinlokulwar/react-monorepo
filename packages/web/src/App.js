import React, {useEffect, useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {getWelcomeString} from 'common/src/main';

import {selectUsers, fetchUsers, addUsers} from 'common/src/users/usersSlice';  
import UserList from './features/users/userList';
import AddUser from './features/users/addUser';
import { Button  } from '@material-ui/core';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const [open, setOpen] = useState(false);
  const   addUser = () => {
    console.log('addUser');
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  
  const saveUserData = (data) => {
    handleClose();
    dispatch(addUsers(data));
  }

  // const handleDeleteClick = (id) => {
  //   dispatch(deleteUser(id));
  // }

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
      <UserList users={users.users}/>
      {open &&
        <AddUser open={open} handleClose={handleClose} saveUserData={saveUserData}/>
      }
    </div>
  );
}

export default App;
