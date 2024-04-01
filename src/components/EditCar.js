import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent"; 
import DialogTitle from "@mui/material/DialogTitle";
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import { SERVER_URL } from "../constants";


function EditCar(props) {

    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState(
        {
            brand:'',
            sfId:''
        });
    
    const handleClickOpen = () =>{
        setCar(
            {
                brand: props.data.row.Brand__c,
                sfId: props.data.row.Id,
            })
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const handleChange = (event) =>{
        setCar({...car, [event.target.name] : event.target.value})
    }

    const handleSave =()=>{
        props.updateCar(car, SERVER_URL+"cardatabase/cars/");
        handleClose();
    }

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <EditIcon color="primary"/>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Car</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} mt={1}>
                        <TextField label="Brand" name="brand"
                            autoFocus variant="standard"
                            value = {car.brand} onChange={handleChange}
                        /><br/>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick ={handleClose}>Cancel</Button>
                    <Button onClick ={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}

export default EditCar;