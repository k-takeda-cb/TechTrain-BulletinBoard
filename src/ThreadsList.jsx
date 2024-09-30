import { useEffect, useState } from 'react';
import { List, ListItem, Paper, Typography, Pagination, Box } from '@mui/material';
import Header from './Header.jsx'

export const ThreadsList = () => {
  const [threadOffset, setThreadOffset] = useState(0);
  const [threadsList, setThreadsList] = useState([]);

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset="+threadOffset)
      .then(res => res.json())
      .then(
        (result) => {
          setThreadsList(result)
        }
      )
  },[threadOffset])

  const threads = (
      <List>
        {threadsList.map((thread) => 
          <ListItem key={thread.id}>
            <Paper elevation={1} style={{ width: '100%', padding: '16px' }}>
              <Typography variant="h6">{thread.title}</Typography>
            </Paper>
          </ListItem>
        )}
      </List>
  );

  return (
    <>
      <Header />
      <Box 
         sx={{
           maxWidth: '1280px',
           margin: '0 auto',
           padding: '2rem',
           textAlign: 'center'
         }}
      >
        <Typography variant="h5" style={{ padding: '8px'}}>スレッド一覧</Typography>
        {threads}
        <Pagination count={10} onChange={(event, value) => setThreadOffset((value-1)*10)} />
      </Box>
    </>
  )
}

export default ThreadsList