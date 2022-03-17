import { Grid, IconButton, TextField } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { useState } from "react";

export default function Input ({ tasks, addTask }){

    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('0');

    const handleAddTask = () => {
        alert(task + " | " + priority);
    };

    const handleTaskChange = () =>{

    };

    

    return <>
        <Grid
            item             
            container
            justifyContent={'center'}
            xs={12}
            spacing={1}
            my={1}
        >   
            <Grid
                item
                xs={10}
                sx={{
                }}
            >                  
                <TextField
                    label="Task"
                    type={"text"}
                    fullWidth
                    value={task}
                    onChange={handleTaskChange}
                />
            </Grid>

            <Grid item xs="auto">
                <IconButton onClick={handleAddTask}>
                    <AddOutlined sx={{fontSize: 40}}/>
                </IconButton>
            </Grid>               
            
            
        </Grid>
    </>;
}