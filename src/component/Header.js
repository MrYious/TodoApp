import { Grid, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { useContext } from "react";
import { ThemeModeContext } from "../context/ThemeModeContext";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";

export default function Header (){
    const handleToggleThemeMode = useContext(ThemeModeContext);
    const theme = useTheme();
    
    return <>        
        <Grid item xs={12} sx={{textAlign: 'center',}}>
            <Typography variant="h4" component={'span'}>                                     
                ToDo List
                <IconButton onClick={handleToggleThemeMode.toggleThemeMode}>
                    {theme.palette.mode === 'light' ? <DarkModeRounded /> : <LightModeRounded/>}
                </IconButton>
            </Typography> 
        </Grid>                  
    </>;
}