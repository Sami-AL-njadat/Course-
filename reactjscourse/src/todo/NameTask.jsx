import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function NameTask() {
    
    
    const [inputValue, setInputValue] = useState('');



    function handleSubmit(event) {
  event.preventDefault();
  let existingData = [];
   try {
    const data = localStorage.getItem('tasks');
    if (data) {
      existingData = JSON.parse(data);
    
      if (!Array.isArray(existingData)) existingData = [];
    }
  } catch (error) {
    console.error('LocalStorage parsing error, resetting data:', error);
    existingData = [];
  }
   const newData = [...existingData, inputValue];
   localStorage.setItem('tasks', JSON.stringify(newData));
  console.log('Saved in localStorage:', newData);
  setInputValue('');  
}



  return (

    

    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
    
      <TextField id="standard-basic" label="Standard" variant="standard"
          value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
      
      />
      
      <Button     onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
     </Box>
  );
}