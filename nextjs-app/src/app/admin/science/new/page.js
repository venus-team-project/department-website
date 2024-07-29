'use client'

import React, { useEffect, useState } from 'react'
import {
    CssBaseline,
    Box,
    Typography,
    Paper,
    Button,
    TextField,
    TextareaAutosize,
    Dialog,
    DialogContent,
    DialogActions,
    DialogContentText,
} from '@mui/material'
import { useMediaQuery } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DownloadIcon from '@mui/icons-material/Download'
import theme from '@/app/theme.js'
import AdminLayout from '@/components/admin/AdminLayout'
import { Done, Save } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

export default function ScienceWork({ params: { id } }) {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [publication, setPublication] = useState({})
    const [successAlert, setSuccessAlert] = useState(false)
    const router = useRouter()
    const baseurl = 'https://department-website.bulhakov.dev/'
    // const baseurl = 'http://localhost:8080/'
    const getPublication = async () => {
        try {
            const response = await fetch(`${baseurl}api/db/books/${id}`)
            setPublication(await response.json())
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        getPublication()
    }, [])

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const publicationData = {
            author: formData.get('author'),
            data: formData.get('data'),
            category: formData.get('category'),
            title: formData.get('title'),
            annotation: formData.get('annotation'),
        }

        try {
            console.log(JSON.stringify(publicationData))
            const response = await fetch(`${baseurl}api/db/books`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(publicationData),
            })

            setSuccessAlert(true)

            setTimeout(() => {
                router.push('/admin/science')
            }, 3000)

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
        } catch (error) {
            console.error('Error submitting data:', error)
        }
    }

    const buttons = [
        {
            label: 'НАЗАД',
            icon: <ArrowBackIcon />,
            backgroundColor: theme.palette.primary.extraLight,
            color: 'black',
            url: '/admin/science',
        },
        {
            label: 'ЗБЕРЕГТИ',
            icon: <Save />,
            type: 'submit',
        },
    ]

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <AdminLayout
                pageTitle="Наукова робота"
                buttons={buttons}
                handleDrawerToggle={handleDrawerToggle}
            >
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Назва публікації"
                            required
                            name="title"
                            defaultValue={publication.title || ''}
                        />
                        <Box
                            display="flex"
                            width="100%"
                            gap={2}
                            flexWrap="wrap"
                        >
                            <TextField
                                sx={{ flexGrow: 1 }}
                                label="Автор"
                                required
                                name="author"
                                defaultValue={publication.author || ''}
                            />
                            <TextField
                                sx={{ flexGrow: 1 }}
                                label="Категорія"
                                required
                                name="category"
                                defaultValue={publication.category || ''}
                            />
                            <TextField
                                sx={{ flexGrow: 1 }}
                                label="Дата публікації"
                                InputLabelProps={{ shrink: true }}
                                type="date"
                                required
                                name="data"
                                defaultValue={publication.data || ''}
                            />
                        </Box>
                        <TextField
                            multiline
                            fullWidth
                            rows={10}
                            inputProps={{ style: { resize: 'vertical' } }}
                            required
                            name="annotation"
                            defaultValue={publication.annotation || ''}
                        />
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                color: theme.palette.primary.main,
                            }}
                        >
                            Завантажено файл NAME.PDF
                        </Typography>
                        <Button
                            variant="contained"
                            startIcon={<DownloadIcon />}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: 'white',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                width: '100%',
                                maxWidth: 300,
                            }}
                        >
                            Завантажити повний текст
                        </Button>
                    </Box>
                </Box>
                <Dialog open={successAlert}>
                    <DialogContent>
                        <DialogContentText>
                            <Typography
                                variant="h5"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                <Done color="success" /> Збережено
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </AdminLayout>
        </form>
    )
}
