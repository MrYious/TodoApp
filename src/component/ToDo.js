import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import TaskList from "./TaskList";

export default function ToDo (){    

    const [tasks, setTasks] = useState([]);

    const addTask = (task, priority) => {
        setTasks([...tasks, {
            id: getLatestId() + 1,
            text: task,
            completed: false,
            priority: priority,
        }]);
    };

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks); 
    }

    const handleToggleComplete = (id) => {
        const editedTaskList = tasks.map(task => {
            if (id === task.id) {
                return {...task, completed: !task.completed}
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    const getLatestId = () =>{
        if(tasks.length === 0){
            return 1;
        }else{            
            tasks.sort((a,b) => a.id - b.id);
        }
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
            >
                <Paper elevation={10} sx={{height: '100%', width: '100%', padding: 4,}} >     
                    <Header />
                    <Input addTask={addTask} />
                    <TaskList 
                        tasks={tasks} 
                        handleToggleComplete={handleToggleComplete} 
                        deleteTask={deleteTask}
                    />                    
                </Paper>
            </Grid>               
        </Grid>
    </>;
}
