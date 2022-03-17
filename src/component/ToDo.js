import { Grid, Paper } from "@mui/material";
import Header from "./Header";

export default function ToDo (){    

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
                </Paper>
                
                {/* Header + theme toggle*/}
                {/* Todo Input*/}
                {/* Todo List*/}

            </Grid>               
        </Grid>
    </>;
}
