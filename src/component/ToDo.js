import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import Header from "./Header";
import Input from "./Input";


const initTasks = [
    {   
        id: 0,              //
        text: "",           // String
        completed: false,   // true | false
        priority: 0,        // 1 - 3
        date: "",
    },
]

export default function ToDo (){    

    const [tasks, setTasks] = useState(initTasks);

    const addTask = (task) => {
        //setTasks({...tasks, task});
        console.log(getLatestId());
    };

    const getLatestId = () =>{
        console.log(tasks.sort((a,b) => a.id - b.id));
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
                    <Input tasks={tasks} addTask={addTask} />
                    
                    {/* Todo Input*/}
                </Paper>               
            </Grid>               
        </Grid>
    </>;
}
