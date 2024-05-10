import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

const ProfileCard = ({surname,firstname,email,phone, social_auth_type, wallet}) => {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Name: {surname} {firstname}
                </Typography>
                <Typography variant="h5" component="div">
                    Email: {email}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Phone: {phone}
                </Typography>
                <Typography variant="body2">
                    Social Auth Type: {social_auth_type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            {wallet.map((item) => {
                return (
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Wallet ID: {item.wallet_id}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Amount: {item.amount}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Transaction Type: {item.transaction_type}
                        </Typography>
                    </CardContent>
                )
            })}
        </Card>
    );
}

export default ProfileCard;