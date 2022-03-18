import { Checkbox, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { red, green } from '@mui/material/colors';

export default function TaskItem ({task, handleToggleComplete}) {
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

    return <>
    <Divider />
        <ListItem
            dense
            color="primary"
            disablePadding
            key={labelId}
            secondaryAction={<>      
                <IconButton edge="end" aria-label="edit">
                    <Edit sx={{ color: green[500], }} />
                </IconButton>      
                <IconButton edge="end" aria-label="delete">
                    <Delete sx={{ color: red[500] }} />
                </IconButton>  
            </>}
        >
            <ListItemButton onClick={() => handleToggleComplete(task.id)}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={task.completed}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText 
                    id={labelId} 
                    primary={task.text} 
                    secondary={secondaryText()}
                    tex
                    sx={{
                        textDecorationLine: task.completed ? 'line-through' : 'none',
                    }}
                />
            </ListItemButton>
        </ListItem>
        <Divider />
    </>;
}