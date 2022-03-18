import { Grid, List } from "@mui/material";
import TaskItem from "./TaskItem";

export default function TaskList ({tasks}) {
    
    return <>
        <Grid 
            item
            xs={12}
            sx={{
                backgroundColor: 'red',
            }}
        >   
            <List  sx={{ width: '100%', background: 'blue', }}>
                <TaskItem task={tasks}/>
            </List>
        </Grid>
    </>;
}