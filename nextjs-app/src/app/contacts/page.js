'use client'
import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
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
    Link,
} from '@mui/material'
import { useState, useRef } from 'react'

const ValidatedTextField = ({ name, validator, onChange, value, setValue }) => {
    const [error, setError] = useState(false)
    const handleChange = (e) => {
        const newValue = e.target.value
        const errorMessage = validator(newValue)
        setValue(newValue)
        setError(errorMessage)
        onChange(!errorMessage)
    }
    return (
        <TextField
            name={name}
            value={value}
            onChange={handleChange}
            error={!!error}
            helperText={error}
        />
    )
}

const MessageValidatedTextField = ({
    name,
    validator,
    onChange,
    value,
    setValue,
}) => {
    const [error, setError] = useState(false)
    const maxChars = 120
    const remainingChars = value ? maxChars - value.length : maxChars

    const handleChange = (e) => {
        const newValue = e.target.value
        const errorMessage = validator(newValue)
        setValue(newValue)
        setError(errorMessage)
        onChange(!errorMessage)
    }

    return (
        <TextField
            name={name}
            value={value}
            onChange={handleChange}
            error={!!error}
            helperText={error ? error : `${remainingChars}/${maxChars}`}
            inputProps={{ maxLength: maxChars }}
            minRows={4}
            maxRows={10}
            multiline
            variant="outlined"
        />
    )
}

const nameValidator = (value) => {
    if (value.length < 2)
        return "Ім'я повинно бути довжиною не менше 2-х символів"
    if (value.length > 20) return "Ім'я повинно бути не довше 20-ти символів"
    if (!/^[a-zA-Zа-яА-ЯіїєґІЇЄҐЁё ]+$/.test(value))
        return "Ім'я повинно містити тільки символи та пробіли"
    return false
}

const emailValidator = (value) => {
    if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value))
        return 'Некоректна email адреса'
    return false
}

const messageValidator = (value) => {
    const maxChars = 120
    const remainingChars = maxChars - value.length

    if (!remainingChars) return 'Ви використали усі символи!'
    else if (!value.length) return 'Ви нічого не ввели'
    return false
}


const Form = () => {
    const formValid = useRef({ name: false, email: false, message: false })
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        adress: '',
    })

    let ifFormisValid = Object.values(formValid.current).every((isValid) => isValid)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(formValid.current).every((isValid) => isValid)) {

            setFormValues({
                name: '',
                email: '',
                message: '',
            })

            formValid.current = { name: false, email: false, message: false }

            alert('Повідомлення відправлено!')
        } else {
            alert('Невалідна форма!')
        }
    }

    return (
        <>
            <Typography component="h3" variant="h3" textAlign="center">
                Написати нам
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
                <Box display="flex" flexDirection="column" gap={3}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        sx={{ maxWidth: { sm: '100%', md: '70%', lg: '50%' } }}
                        gap={3}
                    >
                        <Box display="flex" flexDirection="column">
                            <FormLabel required={true}>Ім&apos;я</FormLabel>
                            <ValidatedTextField
                                name="name"
                                validator={nameValidator}
                                onChange={(isValid) =>
                                    (formValid.current.name = isValid)
                                }
                                value={formValues.name}
                                setValue={(value) =>
                                    setFormValues({
                                        ...formValues,
                                        name: value,
                                    })
                                }
                            />
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <FormLabel required={true}>Email</FormLabel>
                            <ValidatedTextField
                                name="email"
                                validator={emailValidator}
                                onChange={(isValid) =>
                                    (formValid.current.email = isValid)
                                }
                                value={formValues.email}
                                setValue={(value) =>
                                    setFormValues({
                                        ...formValues,
                                        email: value,
                                    })
                                }
                            />
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <FormLabel required={true}>Повідомлення</FormLabel>
                        <MessageValidatedTextField
                            name="message"
                            validator={messageValidator}
                            onChange={(isValid) =>
                                (formValid.current.message = isValid)
                            }
                            value={formValues.message}
                            setValue={(value) =>
                                setFormValues({ ...formValues, message: value })
                            }
                        />
                    </Box>
                    <Box maxWidth={200}>
                        <Button
                            {...(ifFormisValid ? {disabled: false} : {disabled: true})}
                            fullWidth
                            variant="contained"
                            type="submit"
                        >
                            Надіслати
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

const ContactsGrid = () => {
    return (
        <>
            <Typography component="h2" variant="h3">
                Контакти
            </Typography>
            <Box>
                <Typography fontSize="24px">Адреса:</Typography>
                <Typography>
                    Бориславський лісовий університет, 21000, м. Борислав, вул.
                    Незалежності 40
                </Typography>
            </Box>
            <Box>
                <Typography fontSize="24px">Телефон:</Typography>
                <Link href="tel:+380 50 123 4567">
                    <Typography>+380 50 123 4567</Typography>
                </Link>
            </Box>
        </>
    )
}

const GoogleMapFrame = () => {
    return (
        <>
            <div style={{ width: '100%' }}>
                <iframe
                    width="100%"
                    height="600"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Boryslav,%20Lviv%20Oblast,%2082300+(%D0%A1%D0%A8%20%E2%84%967)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
            </div>
        </>
    )
}

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
                        sx={{ my: { xs: 1, md: 3 } }}
                        alignItems="strech"
                    >
                        <Grid
                            item
                            md={4}
                            xs={12}
                            display="flex"
                            flexDirection="column"
                            gap={8}
                        >
                            <ContactsGrid />
                        </Grid>
                        <Grid
                            item
                            md={8}
                            xs={12}
                            display="flex"
                            flexDirection="column"
                        >
                            <Form />
                        </Grid>
                    </Grid>
                    <GoogleMapFrame />
                </Container>
            </Box>
            <Footer />
        </>
    )
}
