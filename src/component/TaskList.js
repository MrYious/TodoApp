import { Grid, List } from "@mui/material";
import TaskItem from "./TaskItem";

export default function TaskList ({tasks, handleToggleComplete, deleteTask}) {
    return <>
        <Grid 
            item
            xs={12}
            p={2}
        >
            <List sx={{ width: '100%',}}>
                {   
                    tasks.sort((a,b) => b.priority - a.priority)
                    .map((task) => {              
                        return <TaskItem key={task.id} task={task} handleToggleComplete={handleToggleComplete} deleteTask={deleteTask} />
                    })
                }
            </List>
        </Grid>
    </>;
}