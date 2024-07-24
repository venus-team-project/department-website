import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box, Container, Grid, Typography } from '@mui/material'

export default function News() {
    return (
        <>
            <Header />
            <Background />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    fontSize: 42,
                }}
            >
                <Container maxWidth="xl" sx={{ mt: { xs: 9, md: 12 } }}>
                    <Grid
                        container
                        component="section"
                        spacing={3}
                        alignItems="stretch"
                    >
                        <Grid item xs={12}>
                            <Typography
                                component="h1"
                                variant="h4"
                                align="center"
                            >
                                Шановна Марія Іванівна!
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={7}
                            display="flex"
                            flexDirection="column"
                            gap={2}
                            sx={{ my: 2 }}
                        >
                            <Typography>
                                Від щирого серця вітаємо Вас із успішним
                                захистом дисертації! Це важливе досягнення є
                                результатом вашої наполегливої праці, відданості
                                науковим дослідженням та невпинного прагнення до
                                знань. Ваш внесок у розвиток агроінформаційних
                                технологій є неоціненним, і ми пишаємося тим, що
                                ви є частиною нашої команди. Бажаємо вам
                                подальших наукових звершень, нових відкриттів та
                                реалізації всіх ваших професійних амбіцій. Нехай
                                ваші дослідження надихають колег і студентів, а
                                ваші наукові досягнення сприяють розвитку нашої
                                кафедри та української науки в цілому. З
                                найкращими побажаннями, Колектив Кафедри
                                агроінформаційних технологій
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box
                                borderRadius={4}
                                component="img"
                                src="/news/greeting.png"
                                width="100%"
                                height="100%"
                                sx={{ objectFit: 'cover' }}
                            ></Box>
                        </Grid>
                        <Grid item xs={12} order={2}>
                            123
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}
