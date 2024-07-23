import {
    Facebook,
    Instagram,
    LinkedIn,
    MailOutline,
    Phone,
    Place,
    Twitter,
} from '@mui/icons-material'
import {
    Box,
    Container,
    Divider,
    Grid,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemIcon,
    Typography,
} from '@mui/material'
import Image from 'next/image'

export default function Footer() {
    return (
        <Box component="footer" bgcolor="primary.extraLight" py={2}>
            <Container maxWidth="xl">
                <Grid container sx={{ pb: 1, alignItems: 'center' }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography maxWidth={300} variant="body2">
                            З природою в серці, з технологіями в руках – до
                            нових висот у агроінформаційних технологіях
                        </Typography>
                        <Box py={1} ml={-1}>
                            <IconButton component="a" href="#">
                                <Instagram />
                            </IconButton>
                            <IconButton component="a" href="#">
                                <Facebook />
                            </IconButton>
                            <IconButton component="a" href="#">
                                <Twitter />
                            </IconButton>
                            <IconButton component="a" href="#">
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        display="flex"
                        justifyContent="center"
                    >
                        <Image src="/logo.svg" width={160} height={160} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Typography>Наші контакти</Typography>
                        <List dense disablePadding>
                            <ListItem disableGutters>
                                <ListItemIcon
                                    sx={{ minWidth: 'unset', paddingRight: 1 }}
                                >
                                    <MailOutline />
                                </ListItemIcon>
                                <Link href="mailto:agro.tech@bluniv.edu.ua">
                                    <Typography>
                                        agro.tech@bluniv.edu.ua
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon
                                    sx={{ minWidth: 'unset', paddingRight: 1 }}
                                >
                                    <Phone />
                                </ListItemIcon>
                                <Link href="tel:+38 067 777 6767">
                                    <Typography>+38 067 777 6767</Typography>
                                </Link>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon
                                    sx={{ minWidth: 'unset', paddingRight: 1 }}
                                >
                                    <Place />
                                </ListItemIcon>
                                <Typography>
                                    21000, м. Борислав, вул. Незалежності 40
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Divider />
                <Box
                    pt={1}
                    display="flex"
                    justifyContent="space-between"
                    gap={1}
                    alignItems="center"
                    flexWrap="wrap"
                >
                    <Typography>
                        © Бориславський лісовий університет 1976 - 2024
                    </Typography>

                    <Typography>
                        Кафедра агроінформаційних технологій
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
