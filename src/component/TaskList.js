import { Grid, List } from "@mui/material";
import TaskItem from "./TaskItem";

export default function TaskList ({tasks}) {
    return <>
        <Grid 
            item
            xs={12}
            sx={{
                marginTop: 2,
            }}
        >   
            <List sx={{ width: '100%',}}>
                {tasks.map((task) => {              
                    return <TaskItem key={task.id} task={task}/>
                })}
            </List>
        </Grid>
    </>;
}