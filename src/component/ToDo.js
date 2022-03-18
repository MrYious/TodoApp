import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import TaskList from "./TaskList";


const initTasks = [
    {   
        id: 1,              //
        text: "",           // String
        completed: false,   // true | false
        priority: 0,        // 1 - 3
        date: "",
    },
]

export default function ToDo (){    

    const [tasks, setTasks] = useState(initTasks);

    const addTask = (task, priority) => {
        setTasks([...tasks, {
            id: getLatestId() + 1,
            text: task,
            completed: false,
            priority: priority,
            date: ""
        }]);
    };

    const getLatestId = () =>{
        tasks.sort((a,b) => a.id - b.id);
        return tasks[tasks.length-1].id;
    };

    return <>
        <Grid 
            container 
            justifyContent="center"
            alignContent="center"
            sx={{
                minHeight: '100vh',          
            }}
        >            
            <Grid 
                item 
                container
                justifyContent={'center'}
                xs={11} md={7} lg={5}
                sx={{
                    //bgcolor: 'gray',                        
                }}
            >
                <Paper elevation={10} sx={{height: '100%', width: '100%', padding: 4,}} >     
                    <Header />
                    <Input addTask={addTask} />
                    <TaskList tasks={tasks} />
                </Paper>               
            </Grid>               
        </Grid>
    </>;
}
