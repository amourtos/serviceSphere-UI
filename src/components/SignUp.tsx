// SignUpForm.tsx
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from "../themes/defaultTheme.ts";
import { ISignUp } from "../interfaces/ISignUp.ts";
import { Address } from "../interfaces/Address.interface.ts";
import { UserType } from "../enums/UserType.enum.ts";
import { States } from "../enums/States.enum.ts";
import Button from '@mui/material/Button';
import ContactInformationForm from "./ContactInformationForm.tsx";
import AddressInformationForm from "./AddressInformation.tsx";

function SignUp() {
    const [activeTab, setActiveTab] = useState(0);
    const [userType, setUserType] = useState(UserType.CUSTOMER);
    const [formData, setContactInfo] = useState<ISignUp>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        userType: UserType.CUSTOMER,
    });
    const [addressData, setAddressData] = useState<Address>({
        addressLine: [],
        city: "",
        state: States.Alabama,
        postalCode: "",
    });

    const handleContactInfoChange = (key: string, value: string) => {
        setContactInfo((prevData) => ({ ...prevData, [key]: value }));
    };

    const handleAddressChange = (key: string, value: string) => {
        setAddressData((prevData) => ({ ...prevData, [key]: value }));
    };

    const handleNext = () => {
        setActiveTab(1);
    };

    const handleUserTypeSelectChange = (key, value) => {
        setUserType(value)
    }

    const handleSubmit = () => {
        // Combine contact and address data before submitting
        const finalFormData: ISignUp & { address: Address } = {
            ...formData,
            address: addressData,
        };
        console.log(finalFormData);

        // Handle further processing or API call here
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        {activeTab === 0 && (
                            <ContactInformationForm onNext={handleNext} onChange={handleContactInfoChange} onSelectChange={handleUserTypeSelectChange} />
                        )}
                        {activeTab === 1 && (
                            <AddressInformationForm onSubmit={handleSubmit} onChange={handleAddressChange} />
                        )}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                            {activeTab > 0 && (
                                <Button variant="contained" color="primary" onClick={() => setActiveTab(activeTab - 1)}>
                                    Back
                                </Button>
                            )}
                            {activeTab < 1 ? (
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    Next
                                </Button>
                            ) : (
                                <Button variant="contained" color="primary" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp;
