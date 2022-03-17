import { Grid } from "@mui/material";
import Header from "./Header";

export default function ToDo (){

    return <>
        <Grid 
            container 
            justifyContent="center"
            alignContent={'center'}
            sx={{
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
                <Header/>
                {/* Header + theme toggle*/}
                {/* Todo Input*/}
                {/* Todo List*/}

            </Grid>            
        </Grid>
    </>;
}
{/* */}