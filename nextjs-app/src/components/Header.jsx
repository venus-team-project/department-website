'use client'

import { Menu } from '@mui/icons-material'
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Toolbar,
    Typography,
    Link as MuiLink,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
} from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const isActive = (url) => {
        return url === usePathname()
    }

    const links = [
        { text: 'Головна', url: '/' },
        { text: 'Про кафедру', url: '/team' },
        { text: 'Наукова робота', url: '/science' },
        { text: 'Новини', url: '/news' },
        { text: 'Контакти', url: '/contacts' },
    ]

    return (
        <Box component="header">
            <AppBar color="transparent" elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ py: 1 }}>
                        <Grid container alignItems="center">
                            <Grid item xs={8} md={10} lg={5}>
                                <MuiLink
                                    variant="body1"
                                    underline="hover"
                                    href="/"
                                    color="text.primary"
                                    display="flex"
                                    alignItems="center"
                                    gap={2}
                                >
                                    <Avatar
                                        src="/logo.svg"
                                        sx={{
                                            width: { xs: 56, md: 76 },
                                            height: { xs: 56, md: 76 },
                                        }}
                                    />

                                    <Typography
                                        maxWidth={350}
                                        sx={{
                                            fontSize: {
                                                xs: '0.75rem',
                                                md: 'unset',
                                            },
                                        }}
                                    >
                                        Кафедра агроінформаційних технологій
                                        Бориславського лісового університету
                                    </Typography>
                                </MuiLink>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    display: { xs: 'none', lg: 'flex' },
                                    gap: 1,
                                    justifyContent: 'flex-end',
                                }}
                            >
                                {links.map((link) => (
                                    <Button
                                        key={link.url}
                                        LinkComponent={Link}
                                        href={link.url}
                                        variant={
                                            isActive(link.url)
                                                ? 'outlined'
                                                : 'text'
                                        }
                                    >
                                        {link.text}
                                    </Button>
                                ))}
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                md={2}
                                lg={1}
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    LinkComponent={Link}
                                    href="#"
                                >
                                    Вхід
                                </Button>
                                <IconButton
                                    onClick={handleOpen}
                                    sx={{
                                        display: { xs: 'flex', lg: 'none' },
                                    }}
                                >
                                    <Menu />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                    {open ? (
                        <Drawer anchor="top" open={open} onClose={handleClose}>
                            <List>
                                {links.map((link) => (
                                    <ListItem key={link.name}>
                                        <ListItemButton
                                            LinkComponent={Link}
                                            href={link.url}
                                            selected={isActive(link.url)}
                                        >
                                            {link.text}
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    ) : null}
                </Container>
            </AppBar>
        </Box>
    )
}
