import React from 'react'
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    Avatar,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import theme from '../../app/theme.js'

const menuItems = [
    { text: 'ГОЛОВНА' },
    { text: 'ПРО КАФЕДРУ' },
    { text: 'НАУКОВА РОБОТА' },
    { text: 'НОВИНИ' },
    { text: 'КОНТАКТИ' },
    { text: 'ПРОФІЛЬ' },
    { text: 'ВИЙТИ' },
]

const SideMenu = ({ mobileOpen, handleDrawerToggle, isMobile }) => {
    const drawer = (
        <div>
            <Toolbar>
                <Avatar
                    src="/logo.svg"
                    sx={{
                        mt: '1rem',
                        width: { xs: 120, md: 192 },
                        height: { xs: 120, md: 192 },
                    }}
                />
                {isMobile && (
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            color: 'white',
                            position: 'absolute',
                            right: 16,
                            top: 16,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                )}
            </Toolbar>
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            sx={{
                                padding: '20px 20px',
                                position: 'relative',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.admin.yellow,
                                },
                                '&:hover .MuiTypography-root': {
                                    color: theme.palette.admin.yellow,
                                },
                                '&:before, &:after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    backgroundColor: theme.palette.admin.yellow,
                                    transform: 'scaleX(0)',
                                    transition: 'transform 0.3s ease-in-out',
                                },
                                '&:before': {
                                    top: 0,
                                    transformOrigin: 'left',
                                },
                                '&:after': {
                                    bottom: 0,
                                    transformOrigin: 'right',
                                },
                                '&:hover:before': {
                                    transform: 'scaleX(1)',
                                },
                                '&:hover:after': {
                                    transform: 'scaleX(1)',
                                },
                            }}
                        >
                            <ListItemText
                                primary={
                                    <Typography
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '16px',
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    )

    return (
        <Drawer
            variant={isMobile ? 'temporary' : 'persistent'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                '& .MuiDrawer-paper': {
                    width: 240,
                    backgroundColor: theme.palette.primary.main,
                    boxSizing: 'border-box',
                    ...(isMobile && { position: 'fixed' }),
                },
            }}
        >
            {drawer}
        </Drawer>
    )
}

export default SideMenu
