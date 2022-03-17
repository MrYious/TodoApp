import { Grid, IconButton, TextField } from "@mui/material";
import { AddBox} from "@mui/icons-material";

export default function Input ({ tasks, addTask }){

    const handleAddTask = () => {
        console.log(tasks);
    };

    return <>
        <Grid 
            item
            container
            xs={12}
            spacing={2}
            justifyContent="center"
        >   
            <Grid 
                item 
                xs={8}
            >
                <TextField
                    label="Task" 
                    size="small"
                    fullWidth
                />
            </Grid>
            <Grid item xs={1}
            >
                <IconButton onClick={handleAddTask} >
                    <AddBox fontSize="inherit"/>
                </IconButton>
            </Grid>
            
            
        </Grid>
    </>;
}