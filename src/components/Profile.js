import axios from "axios";
import { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";

const Profile = () => {
    const [profileData, setprofileData] = useState({
        first_name: "",
        sur_name: "",
        email: "",  
        phone: "",
        social_auth_type: "",
        wallet: []

    });

    const token = useSelector(state => state.user.token);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await axios.get('https://sandbox.practical.me/api/user/profile' , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        NotificationManager.success(response.data.message, "Success!");
        setprofileData({
            first_name: response.data.data.first_name,
            sur_name: response.data.data.sur_name,
            email: response.data.data.email,
            phone: response.data.data.phone,
            social_auth_type: response.data.data.social_auth_type,
            wallet: response.data.data.wallet
        })
    }

    return (
        <div>
         <ProfileCard surname= {profileData?.sur_name} firstname= {profileData.first_name} email = {profileData.email} phone = {profileData.phone} social_auth_type = {profileData.social_auth_type} wallet = {profileData.wallet}/>      
        </div>
    )   
}

export default Profile;