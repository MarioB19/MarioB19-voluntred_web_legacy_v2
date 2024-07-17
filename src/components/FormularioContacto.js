import React from 'react';
import { Box, TextField, Button, Typography, Grid, InputAdornment, useTheme, useMediaQuery } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function FormularioContacto() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        p: 4,
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderRadius: 2,
        maxWidth: 600,
        mx: 'auto',
        my: 4,
        animation: `${fadeIn} 0.5s ease-out`
      }}
    >
        <Typography
      variant="h4"
      gutterBottom
      sx={{
        color: isDarkMode ? '#4dabf5' : '#1976d2',
        display: 'flex',
        alignItems: 'center',
        mb: 4,
        fontWeight: 'bold',
        fontSize: '2rem'
      }}
    >
      <MailOutlineIcon sx={{ fontSize: 40, color: 'inherit', mr: 1 }} />
      Manda <Typography variant="h4" component="span" sx={{ color: theme.palette.text.primary, fontWeight: 'bold', fontSize: '2rem', ml: 1 }}>un mensaje.</Typography>
    </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" display="block" sx={{ mb: 1, color: 'text.primary', fontWeight: 'bold' }}>
            Nombre
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Nombre"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon sx={{ color: isDarkMode ? '#4dabf5' : '#1976d2', fontSize: 28 }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle(isDarkMode)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" display="block" sx={{ mb: 1, color: 'text.primary', fontWeight: 'bold' }}>
            Email
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon sx={{ color: isDarkMode ? '#4dabf5' : '#1976d2', fontSize: 28 }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle(isDarkMode)}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" display="block" sx={{ mb: 1, color: 'text.primary', fontWeight: 'bold' }}>
            Mensaje
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Mensaje"
            multiline
            rows={4}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ alignSelf: 'flex-start', mt: 1, mr: 1 }}>
                  <EditNoteIcon sx={{ color: isDarkMode ? '#4dabf5' : '#1976d2', fontSize: 28 }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle(isDarkMode)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              bgcolor: isDarkMode ? '#4dabf5' : '#1976d2',
              color: 'white',
              textTransform: 'uppercase',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              py: 2,
              mt: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: isDarkMode ? '#2196f3' : '#1565c0',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 15px rgba(25, 118, 210, 0.3)',
              }
            }}
            fullWidth
          >
            Enviar Mensaje
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

const textFieldStyle = (isDarkMode) => ({
  '& .MuiOutlinedInput-root': {
    fontSize: '1.2rem',
    '& fieldset': {
      borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: isDarkMode ? '#4dabf5' : '#1976d2',
    },
    '&.Mui-focused fieldset': {
      borderColor: isDarkMode ? '#4dabf5' : '#1976d2',
      borderWidth: '2px',
    },
    boxShadow: isDarkMode 
      ? '0 4px 10px rgba(77, 171, 245, 0.2)' 
      : '0 4px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    backgroundColor: isDarkMode ? '#333' : 'white',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: isDarkMode 
        ? '0 6px 12px rgba(77, 171, 245, 0.3)' 
        : '0 6px 12px rgba(0, 0, 0, 0.3)',
    }
  },
  '& .MuiInputBase-input': {
    padding: '16px 14px',
    color: isDarkMode ? '#fff' : '#000',
  },
  '& .MuiInputBase-input::placeholder': {
    color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
    opacity: 1,
  }
});