import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme, withStyles} from '@material-ui/core/styles';
import {purple} from "@material-ui/core/colors";
import {TextField} from "@material-ui/core";

export default function Modal() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(purple[500]),
            backgroundColor: purple[500],
            '&:hover': {
                backgroundColor: purple[700],
            },
        },
    }))(Button);

    return (
        <div>
            <ColorButton variant="outlined" color="primary" onClick={handleClickOpen}>
                Add new Course
            </ColorButton>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"ADD NEW COURSE"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="Ten Khoa Hoc"
                            helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Ma Khoa Hoc"
                            id="standard-full-width"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            margin="normal"
                            style={{ margin: 8 }}
                            fullWidth
                        />
                        <TextField
                            label="Ngay Tao"
                            id="standard-full-width"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            margin="normal"
                            style={{ margin: 8 }}
                            fullWidth
                        />
                        <TextField
                            label="Ma Nhom"
                            id="standard-full-width"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            margin="normal"
                            style={{ margin: 8 }}
                            fullWidth
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ColorButton autoFocus onClick={handleClose} color="primary">
                        Disagree
                    </ColorButton>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
