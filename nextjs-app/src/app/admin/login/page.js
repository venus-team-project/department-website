'use client'

import {
    Box, Button, Checkbox, Container, FormControlLabel, Paper, TextField, Typography,
} from '@mui/material'
import React, { useRef, useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTheme } from '@emotion/react'
import { styled } from '@mui/system'

const StyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'min-height 0.2s ease',
}))

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        width: '100%', padding: theme.spacing(2),
    },
    minWidth: '200px',
    width: '100%',
}))

const GoogleButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1),
    backgroundColor: theme.palette.primary.extraLight,
    color: theme.palette.black,
    textTransform: 'none',
    boxShadow: theme.shadows[2],
    width: '100%',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.white,
        boxShadow: theme.shadows[4],
        transition: 'all 0.3s ease',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}))

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    alignSelf: 'flex-start', '& .MuiFormControlLabel-label': {
        fontWeight: 500,
    }, transition: 'all 0.3s ease', '& .MuiCheckbox-root': {
        transition: 'all 0.3s ease',
    },
}))

export default function Login() {
    const theme = useTheme()

    const headerRef = useRef(null)
    const footerRef = useRef(null)
    const [containerMinHeight, setContainerMinHeight] = useState('100vh')

    useEffect(() => {
        const updateContainerHeight = () => {
            const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0
            const footerHeight = footerRef.current ? footerRef.current.offsetHeight : 0
            setContainerMinHeight(`calc(100vh - ${headerHeight + footerHeight}px)`)
        }

        updateContainerHeight()

        window.addEventListener('resize', updateContainerHeight)
        return () => window.removeEventListener('resize', updateContainerHeight)
    }, [])

    return (<>
        <Header />
        <Box
            component="main"
            sx={{
                flexGrow: 1, fontSize: 42,
            }}
        >
            <Container maxWidth="lg">
                <StyledContainer maxWidth="sm" sx={{ minHeight: containerMinHeight }}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 500, color: theme.palette.black }}>
                            Вхід в адмін-панель
                        </Typography>
                        <TextField
                            label="Email адреса"
                            variant="outlined"
                            fullWidth
                            required
                            InputLabelProps={{ style: { fontWeight: 500 } }}
                            InputProps={{ style: { fontWeight: 500 } }}
                        />
                        <TextField
                            label="Пароль"
                            variant="outlined"
                            type="password"
                            fullWidth
                            required
                            InputLabelProps={{ style: { fontWeight: 500 } }}
                            InputProps={{ style: { fontWeight: 500 } }}
                        />
                        <StyledFormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Запам'ятати мене"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ fontWeight: 500 }}
                        >
                            УВІЙТИ ЗА ЛОГІНОМ
                        </Button>
                        {/*<Typography variant="body1" component="p" sx={{ fontWeight: 600, color: theme.palette.primary.main, }}>*/}
                        {/*    АБО*/}
                        {/*</Typography>*/}
                        <GoogleButton
                            variant="filled"
                            sx={{ fontWeight: 500 }}
                        >
                            <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google logo"
                                 style={{ width: '20px', height: '20px' }} />
                            Sign up with Google
                        </GoogleButton>
                    </StyledPaper>
                </StyledContainer>
            </Container>
        </Box>
        <Footer />
    </>)
}
