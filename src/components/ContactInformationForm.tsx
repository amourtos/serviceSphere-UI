import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {UserType} from "../enums/UserType.enum.ts";
import {Each} from "../assets/Each.ts";

interface ContactInformationProps {
    onNext: () => void;
    onChange: (key: string, value: string) => void;
    onSelectChange: (key: string, value: UserType) => void;
}

const ContactInformationForm: React.FC<ContactInformationProps> = ({ onChange, onSelectChange }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(e) => onChange("firstName", e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(e) => onChange("lastName", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => onChange("email", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => onChange("password", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <Select
                    labelId="userType-label"
                    fullWidth
                    id="userType"
                    name="userType"
                    label="User Type"
                    defaultValue={UserType.CUSTOMER}
                    onChange={(e) => onSelectChange("userType", e.target.value as UserType)}
                >
                    <Each
                        of={Object.values(UserType)}
                        render={(item) => (
                            <MenuItem key={item} value={item}>
                                {item.toLowerCase()}
                            </MenuItem>
                        )}
                    />
                </Select>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                />
            </Grid>
        </Grid>
    );
};

export default ContactInformationForm;
