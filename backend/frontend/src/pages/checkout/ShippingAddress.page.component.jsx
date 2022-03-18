import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ShippingAddressPage = () => {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                ที่อยู่สำหรับการจัดส่ง
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="ชื่อ"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="นามสกุล"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    id="address1"
                    name="address1"
                    label="ที่อยู่"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="city"
                    name="city"
                    label="จังหวัด"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="state"
                    name="state"
                    label="เขต"
                    fullWidth
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="รหัสไปรษณีย์"
                    fullWidth
                    autoComplete="shipping postal-code"
                    variant="standard"
                />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ShippingAddressPage;