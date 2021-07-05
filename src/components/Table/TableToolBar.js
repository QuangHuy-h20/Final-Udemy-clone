import {lighten, makeStyles, withStyles} from "@material-ui/core/styles";
import Modal from '../Modal';
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCourse, getCourseList } from "src/actions/adminCourse";

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        fontSize: '1.1rem',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.75),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));



export default function EnhancedTableToolbar(props) {
    const classes = useToolbarStyles();
    const { numSelected, selectedCourse } = props;
    const [courseUpdate, setCourseUpdate] = useState(null);
    const dispatch = useDispatch();
    const handleDeleteCourse = () => {
        console.log(selectedCourse);
        dispatch(deleteCourse(selectedCourse))
        dispatch(getCourseList());
    }

    const handleEditForm = item => {
        setCourseUpdate(selectedCourse);
    }
    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                    <Modal selectedCourse={selectedCourse}/>
                </Typography>
            )}

            {numSelected === 1 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete" onClick={handleDeleteCourse}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton aria-label="filter list">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};