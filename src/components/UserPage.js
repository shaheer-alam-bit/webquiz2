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
        <Box>
            <Button variant="contained" onClick={handleRedirectToProfile}>Show My Profile</Button>
            <Button variant="contained" onClick={handleRedirectToFAQ}>FAQ's</Button>
        </Box>
    )
}

export default UserPage;