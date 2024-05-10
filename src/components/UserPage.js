import { Box, Button } from "@mui/material";
const { useNavigate } = require("react-router-dom");

const UserPage = () => {

    const navigate = useNavigate();

    const handleRedirectToProfile = () => {
        navigate('/profile')
    }

    const handleRedirectToFAQ = () => {
        navigate('/faq')
    }
    return(
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button 
                variant="contained" 
                onClick={handleRedirectToProfile} 
                style={{ 
                    marginRight: '10px', 
                    background: '#4CAF50', 
                    color: 'white', 
                    borderRadius: '5px',
                    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.3)',
                    padding: '10px 20px',
                    border: 'none'
                }}
            >
                Show My Profile
            </Button>
            <Button 
                variant="contained" 
                onClick={handleRedirectToFAQ} 
                style={{ 
                    background: '#2196F3', 
                    color: 'white', 
                    borderRadius: '5px',
                    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.3)',
                    padding: '10px 20px',
                    border: 'none'
                }}
            >
                FAQ's
            </Button>
        </Box>
    )
    
}

export default UserPage;