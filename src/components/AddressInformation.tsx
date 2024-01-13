import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {MenuItem, Select} from "@mui/material";
import {States} from "../enums/States.enum.ts";
import {Each} from "../assets/Each.ts";

interface AddressInformationProps {
    onSubmit: () => void;
    onChange: (key: string, value: string) => void;
    onSelectChange: (key: string, value: States) => void;

}

const AddressInformationForm: React.FC<AddressInformationProps> = ({onChange, onSelectChange}) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="addressLine"
                    label="Address Line"
                    name="addressLine"
                    onChange={(e) => onChange("addressLine", e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    onChange={(e) => onChange("city", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <Select
                    labelId="state-label"
                    id="state"
                    name="state"
                    defaultValue={States.Alabama}
                    onChange={(e) => onSelectChange("state", e.target.value as States)}
                    label="State"
                >
                    <Each
                        of={Object.values(States)}
                        render={(item: string) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        )}
                    />
                </Select>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="postalCode"
                    label="Postal Code"
                    name="postalCode"
                    onChange={(e) => onChange("postalCode", e.target.value)}
                />
            </Grid>
        </Grid>
    );

}

export default AddressInformationForm;