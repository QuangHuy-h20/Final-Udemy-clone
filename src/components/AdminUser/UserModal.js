import React from 'react';
import { Dialog,DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import UserControl from '../UserControl/UserControl';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
    },
    dialogTitle:{
        paddingRight:'0px'
    }
}))
export default function UserModal(props){
    const {title, children, setUser, openModal, setOpenModal} = props;
    const classes = useStyles();
    const handleClose = ()=> {
        setUser(null);
        setOpenModal(false);
    }
    return(
        <Dialog open={openModal} maxWidth='md' classes={{paper:classes.dialogWrapper}}>
            <DialogTitle className={classes.dialogTitle}>
                <Typography variant='h6' component='div' style={{flexGrow:1}}>
                    {title}
                </Typography>
                <UserControl.ActionButton
                    color='secondary'
                    onClick={handleClose}
                >
                    <CloseIcon/>
                </UserControl.ActionButton>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}