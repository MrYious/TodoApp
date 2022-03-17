import { Grid, IconButton, makeStyles, TextField } from "@mui/material";
import { useTheme } from "@mui/system";
import { useContext } from "react";
import { ThemeModeContext } from "../context/ThemeModeContext";
import { AddCircle } from '@mui/icons-material';
import { red } from "@mui/material/colors";

export default function ToDo (){

    const handleToggleThemeMode = useContext(ThemeModeContext);
    const theme = useTheme();

    return <>
        <Grid 
            container 
            justifyContent="center"
            alignContent={'center'}
            sx={{
                backgroundColor: 'gray',
                minHeight: '100vh',
            }}
        >
            <Grid 
                item 
                container
                justifyContent={'center'}
                xs={9} md={6} 
                p={5} 
                sx={{
                    bgcolor: 'red',
                }}
            >   
                <Grid item> Content </Grid>
                {/* Header + theme toggle*/}
                {/* Todo Input*/}
                {/* Todo List*/}

            </Grid>            
        </Grid>
    </>;
}
{/* */}