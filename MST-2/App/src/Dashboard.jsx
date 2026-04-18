import { Container, Box, Typography, Button } from '@mui/material';
import { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import './Dashboard.css';

function Dashboard() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div className={`dashboard ${darkMode ? 'dark' : ''}`}>
            <Container maxWidth="sm">
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                    <Typography variant="h3" component="h1">
                        Dashboard
                    </Typography>
                    <button onClick={toggleDarkMode}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </Box>
                <div className="dashboard-card">
                    <Typography variant="body1" mb={2}>
                        Welcome to your dashboard!
                    </Typography>
                    <button>Click Me</button>
                </div>
            </Container>
        </div>
    );
}

export default Dashboard;
