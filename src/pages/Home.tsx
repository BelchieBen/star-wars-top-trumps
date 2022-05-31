import React, {useState} from 'react';
import {
    Typography,
    Box,
    Button,
    Stack
} from '@mui/material';

export default function Home(){
    const [showCreate, setShowCreate] = useState(false);
    const [showJoin, setShowJoin] = useState(false);
    
    const handleCreateGameClicked = () => {
        setShowCreate(!showCreate);
    }

    const handleJoinGameClicked = () => {
        setShowJoin(!showJoin);
    }

    return(
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:2}}>
            <Typography variant="h1" color="primary">Star Wars</Typography>
            <Typography variant="h3" color="primary">Online Top Trumps</Typography>

            <Stack direction="row" spacing={2} justifyContent="center" sx={{marginTop:4}}>
                <Button variant="outlined" onClick={handleCreateGameClicked}>Create Game</Button>
                <Button variant="outlined" onClick={handleJoinGameClicked}>Join Game</Button>
            </Stack>

            {showCreate? <Typography variant='body1' color="primary">Create a game</Typography> : <></>}
            {showJoin? <Typography variant='body1' color="primary">Join a game</Typography> : <></>}
        </Box>
    )
}