import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { useState } from "react";



export default function Input ({ addTask }){

    const [task, setTask] = useState("");
    const [priority, setPriority] = useState(2);
    
    const handleAddTask = () => {
        if(task && task !== "" && priority !== 0){ 
            addTask(task, priority);
            reset();
        }
    };

    const handleTaskChange = (e) =>{
        setTask(e.target.value);
    };

    const handlePriorityChange = (e) =>{
        setPriority(e.target.value);
    };

    const reset = () => {
        setTask("");
        setPriority(2);
    }

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
                xs={'auto'}
            >
                <TextField
                    label="Task"
                    type={"text"}
                    fullWidth
                    value={task}
                    onChange={handleTaskChange}
                    variant="filled"
                />
            </Grid>
            <Grid
                item
                xs={3}
            >   
                <FormControl variant="filled" fullWidth>
                    <InputLabel id="label-priority">Priority</InputLabel>
                    <Select
                        labelId="label-priority"
                        value={priority}
                        label="Priority"
                        onChange={handlePriorityChange}
                    >
                        <MenuItem value={1}>Low</MenuItem>
                        <MenuItem value={2}>Normal</MenuItem>
                        <MenuItem value={3}>High</MenuItem>
                    </Select>
                </FormControl>                
            </Grid>
            <Grid item xs="auto">
                <IconButton onClick={handleAddTask}>
                    <AddOutlined sx={{fontSize: 40}}/>
                </IconButton>
            </Grid>
        </Grid>
    </>;
}