import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
// import FormGroup from '@mui/material/FormGroup
import {
    Input,
    TextField,
    Button,
    FormControl,
    FormLabel,
    Box,
    Grid,
    Container,
    Typography,
} from '@mui/material'

export default function Contacts() {
    return (
        <>
            <Background />
            <Header />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    fontSize: 42,
                }}
            >
                <Container maxWidth="xl">
                    <Grid
                        container
                        component="section"
                        spacing={3}
                        sx={{ mt: { xs: 9, md: 12 } }}
                        alignItems="strech"
                    >
                        <Grid item md={4} display="flex" flexDirection="column">
                            <Typography component="h2" variant="h3">
                                Контакти
                            </Typography>
                            <Typography>Адреса:</Typography>
                            <Typography>
                                Бориславський лісовий університет, 21000, м.
                                Борислав, вул. Незалежності 40
                            </Typography>
                            <Typography>Телефон</Typography>
                            <Typography>+380 50 123 4567</Typography>
                        </Grid>
                        <Grid item md={8} display="flex" flexDirection="column">
                            <FormControl>
                                <FormLabel required={true}>Ім&apos;я</FormLabel>
                                <TextField></TextField>
                                <FormLabel required={true}>Email</FormLabel>
                                <TextField></TextField>
                                <FormLabel required={true}>
                                    Повідомлення
                                </FormLabel>
                                <TextField
                                    required={true}
                                    multiline
                                    error
                                    helperText="Provide valid values!"
                                ></TextField>
                                <Button>Submit</Button>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <div style={{width: "100%"}}>
                        <iframe
                            width="100%"
                            height="600"
                            frameborder="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%9F%D0%BE%D0%BB%D1%96%D1%82%D0%B5%D1%85%D0%BD%D1%96%D1%87%D0%BD%D0%B8%D0%B9%20%D0%86%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        >
                        </iframe>
                    </div>
                </Container>
            </Box>
            <Footer />
        </>
    )
}
