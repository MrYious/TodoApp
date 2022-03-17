import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import Header from "./Header";
import Input from "./Input";


const initTasks = [
    {   
        uid: 0,              //
        name: "",           // String
        completed: false,   // true | false
        priority: 0,        // 1 - 3
        date: "",
    },
]

export default function ToDo (){    

    const [tasks, setTasks] = useState(initTasks);

    const addTask = (task) => {
        setTasks({...tasks, task});
    };

    return <>
        <Grid 
            container 
            justifyContent="center"
            alignContent={'center'}
            sx={{
                minHeight: '100vh',                
                //bgcolor: 'gray',          
            }}
        >            
            <Grid 
                item 
                container
                direction={'column'}
                justifyContent={'center'}
                xs={9} md={6}
                sx={{
                    //bgcolor: 'gray',                        
                }}
            >   
                <Paper elevation={10} sx={{height: '100%', width: '100%', padding: 5,}}>
                    <Header />
                    <Input tasks={tasks} addTask={addTask} />
                    {/* Todo Input*/}
                    {/* Todo List*/}
                </Paper>
                

            </Grid>               
        </Grid>
    </>;
}
