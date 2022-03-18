import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const RegisterPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    };
    return (
        <Container component="main" maxWidth="xs">
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Typography component="h1" variant="h5">
                สมัครสมาชิก
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="อีเมล์"
                name="email"
                autoComplete="email"
                autoFocus
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="รหัสผ่าน"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="ยืนยันรหัสผ่าน"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                    สมัครสมาชิก
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        {'มีบัญชีแล้ว? เข้าสู่ระบบ'}
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                        ใช้บัญชี Demo
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Container>
    )
}

export default RegisterPage;