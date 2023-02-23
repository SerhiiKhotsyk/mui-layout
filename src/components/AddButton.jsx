import { Add, CalendarMonth } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
};

const AddButton = ({setIsScrollVisible, ...props}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setIsScrollVisible(false)
    }
    const handleClose = () => {
        setOpen(false);
        setIsScrollVisible(true)
    }

    return (
        <>
            <Tooltip onClick={handleOpen} title='Add new post'
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: { xs: 'calc(50%)', sm: 20 },
                    transform: { xs: 'translate(-50%)', sm: 'translate(0px)' }
                }}>
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
            <Modal open={open} onClose={handleClose} >
                <Box sx={style}>
                    <form>
                        <Typography variant="h6" component="h2" color={'text.primary'}>
                            Create post
                        </Typography>
                        <TextField
                            label="What's on your mind?"
                            multiline
                            fullWidth
                            variant='filled'
                            margin="normal"
                            rows={4}
                        />
                            <ButtonGroup fullWidth variant="contained">
                                <Button sx={{textTransform: "uppercase"}} >Post</Button>
                                <Button sx={{width: '100px'}} ><CalendarMonth/></Button>
                            </ButtonGroup>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default AddButton;