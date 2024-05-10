import Login from "./Login";
import { Box, Typography } from "@mui/material";

const Auth = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                    Login PAGE
                </Typography>
                <Box sx={{ display: "flex", height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ margin: "20px", padding: "10px", border: "2px solid black", boxShadow: "10px 15px 16px rgba(0, 0, 0, 0.5)" }}>
                        <Login />
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default Auth;