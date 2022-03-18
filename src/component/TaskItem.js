import { Checkbox, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

export default function TaskItem ({task}) {

    const labelId = "label-" + task.id;
    const secondaryText = () => {
        switch(task.priority){
            case 1:
                return "Low";
            case 2:
                return "Normal";
            case 3:
                return "High";
            default:
                return "error";
        }
    }


    const handleTaskClick = () =>{
        console.log(task);
    }

    return <>
    <Divider />
        <ListItem
            dense
            color="primary"
            disablePadding
            key={labelId}
            secondaryAction={<>      
                <IconButton edge="end" aria-label="edit">
                    <Edit />
                </IconButton>      
                <IconButton edge="end" aria-label="delete">
                    <Delete />
                </IconButton>  
            </>}
        >
            <ListItemButton onClick={handleTaskClick}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={task.completed}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={task.text} secondary={secondaryText()} />
            </ListItemButton>
        </ListItem>
        <Divider />
    </>;
}