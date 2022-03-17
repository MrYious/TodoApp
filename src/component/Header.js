import { Grid, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { useContext } from "react";
import { ThemeModeContext } from "../context/ThemeModeContext";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";

export default function Header (){
    const handleToggleThemeMode = useContext(ThemeModeContext);
    const theme = useTheme();
    return <>
        <Grid 
            item
            container 
            xs={12}
            justifyContent={'center'}
            sx={{
                backgroundColor: 'white',
            }}
        >
            <Grid 
                item
                xs={4}
                justifyContent={'center'}
                fontSize={'large'}
                sx={{
                    backgroundColor: 'blue',
                    textAlign: 'center',
                    
                }}
                
            >   
                <Typography variant="h3">                                     
                    Todo App                    
                </Typography>  
                <IconButton size="large" onClick={handleToggleThemeMode.toggleThemeMode}>
                    {theme.palette.mode === 'light' ? <DarkModeRounded fontSize="medium" /> : <LightModeRounded/>}
                </IconButton>
                               
            </Grid>    
        </Grid>
    </>;
}