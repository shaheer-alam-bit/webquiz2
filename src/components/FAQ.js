import { Box, Typography, styled } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useSelector } from "react-redux";
import React from "react";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const FAQ = () => {
    const [faqData, setfaqData] = useState([]);
    const token = useSelector(state => state.user.token);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await axios.get('https://sandbox.practical.me/api/faq', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        NotificationManager.success(response.data.message, "Success!");
        setfaqData(response.data.data);
    }

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&::before': {
            display: 'none',
        },
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

    return (
        <div>
            <Box sx= {{display: "flex", flexDirection:"column", alignItems:"center", backgroundColor:"black", color:"white"}}>
                 <Typography variant="h3">FAQ's</Typography>
            </Box>
            {faqData.map((item) => (
                <Accordion  sx={{backgroundColor:"#75F777"}}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')} key={item.id}>
                    <AccordionSummary sx={{backgroundColor:"#FF5050"}} aria-controls="panel1d-content" id="panel1d-header">
                        <Typography sx={{fontWeight:'bolder'}}>{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{fontWeight:'bolder'}}>
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}

        </div>
    );
}

export default FAQ;