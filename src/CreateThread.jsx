import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";
import Header from './Header.jsx'

export const CreateThread = () => {
  const [threadTitle, setThreadTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const postThread = async () => {
    try {
      const postThreadResponse = await fetch("https://railway.bulletinboard.techtrain.dev/threads", {
        method: "POST",
        body: JSON.stringify({ title: threadTitle}),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (postThreadResponse.status === 200) {
        navigate("/");
      } else {
        setErrorMessage("リクエストが失敗しました")
      }
    } catch (error) {
      setErrorMessage("エラーが発生しました:"+ error);
    }
  }

  return (
    <>
      <Header />
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Typography variant="h5" style={{ padding: '8px'}}>スレッド作成</Typography>
        <TextField
          label="スレッド名"
          variant="outlined"
          value={threadTitle}
          onChange={(e) => setThreadTitle(e.target.value)}
          fullWidth
          sx={{ width: "80%", mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={postThread}>
          送信
        </Button>
        {errorMessage && (
          <Typography variant="body1" color="error" mt={2}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </>
  )
}

export default CreateThread