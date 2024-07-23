'use client'

import { Box, Container, Grid, Typography } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useTheme } from '@emotion/react'

const style = { mt: { xs: 9, md: 12 } }

export default function Home() {
    const theme = useTheme()
    return (
        <>
            <Header />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    fontSize: 42,
                }}
            >
                <Container maxWidth="xl">
                    <Grid container component="section" spacing={3} sx={style}>
                        <Grid
                            item
                            md={7}
                            sm={12}
                            display="flex"
                            flexDirection="column"
                            gap={2}
                        >
                            <Typography component="h2" variant="h3">
                                Вітаємо у світі сучасних{' '}
                                <span
                                    style={{
                                        color: theme.palette.primary.main,
                                    }}
                                >
                                    аграрних
                                </span>{' '}
                                технологій!
                            </Typography>
                            <Typography>
                                Кафедра агроінформаційних технологій є сучасним
                                центром освіти і наукових досліджень у сфері
                                застосування інформаційних технологій в
                                аграрному секторі.
                            </Typography>
                            <Typography>
                                Наші студенти отримують не тільки фундаментальні
                                знання в галузі агрономії та інформаційних
                                технологій, але й набувають практичних навичок,
                                необхідних для успішної кар&apos;єри в сучасному
                                аграрному світі.
                            </Typography>
                            <Typography>
                                Запрошуємо вас ознайомитися з нашими освітніми
                                програмами, науковими дослідженнями та
                                досягненнями. Ми завжди відкриті до співпраці та
                                нових ідей. Приєднуйтесь до нас, щоб разом
                                створювати майбутнє агроінформаційних
                                технологій!
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={5}
                            sx={{
                                backgroundImage: 'url(/home/greeting.png)',
                                backgroundRepeat: 'no-repeat',
                                objectFit: 'cover',
                            }}
                        ></Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}
