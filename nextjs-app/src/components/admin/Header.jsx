import React from 'react'
import { Box, IconButton, Typography, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddIcon from '@mui/icons-material/Add'
import theme from '../../app/theme.js'

const Header = ({ handleDrawerToggle, pageTitle }) => {
    return (
        <>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Typography
                    variant="h4"
                    sx={{
                        color: theme.palette.primary.main,
                        fontSize: '24px',
                        fontWeight: 'bold',
                    }}
                >
                    {pageTitle}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, color: theme.palette.primary.main }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        color: theme.palette.primary.main,
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    СПИСОК ПУБЛІКАЦІЙ
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 3,
                }}
            >
                <Button
                    variant="contained"
                    startIcon={<ArrowBackIcon />}
                    sx={{
                        backgroundColor: theme.palette.primary.extraLight,
                        color: 'black',
                    }}
                >
                    НАЗАД
                </Button>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                    }}
                >
                    СТВОРИТИ
                </Button>
            </Box>
        </>
    )
}

export default Header
