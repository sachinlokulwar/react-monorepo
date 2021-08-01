import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AddUser({open, handleClose, saveUserData}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const handleSubmit = () => {
        const data = {
            name: name,
            job: email
        }
        saveUserData(data)
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="modal-title">Add User</h2>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={handleNameChange}
                        className="text-field"
                    /><br />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        className="text-field"
                    /><br/>
                    <Button variant="contained" color="primary" onClick={handleSubmit} className="submit-btn">
                        Submit
                    </Button>
                </div>
        </Modal>
    );
}
