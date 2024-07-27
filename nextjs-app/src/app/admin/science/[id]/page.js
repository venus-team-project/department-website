'use client'

import React, { useState } from 'react'
import { CssBaseline, Box, Typography, Paper, Button } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit'
import theme from '@/app/theme.js'
import AdminLayout from '@/components/admin/AdminLayout'

export default function ScienceWork() {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

    const handleEditClick = () => {
        // Button logic "Редагувати"
    }

    const buttons = [{
        label: 'НАЗАД',
        icon: <ArrowBackIcon />,
        backgroundColor: theme.palette.primary.extraLight,
        color: 'black',
        url: '/admin/science',
    }, {
        label: 'РЕДАГУВАТИ', icon: <EditIcon />, onClick: handleEditClick,
    }]

    return (<AdminLayout pageTitle="Наукова робота" buttons={buttons} handleDrawerToggle={handleDrawerToggle}>
        <CssBaseline />
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: '100%',
        }}>
            <Box>
                <Typography variant="h5" sx={{
                    fontWeight: 'bold', textTransform: 'uppercase', color: theme.palette.primary.main, mb: 4,
                }}>
                    РОЗРОБКА АЛГОРИТМУ ГЛИБОКОГО НАВЧАННЯ ДЛЯ РОЗПІЗНАВАННЯ ОБРАЗІВ
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                    <Typography variant="body1" sx={{ color: theme.palette.primary.main }}>
                        <Box component="strong"
                             sx={{ textTransform: 'uppercase', color: theme.palette.black }}>Автор:</Box> Іван Морозюк
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.primary.main }}>
                        <Box component="strong"
                             sx={{
                                 textTransform: 'uppercase', color: theme.palette.black,
                             }}>Категорія:</Box> Біотехнології
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.primary.main }}>
                        <Box component="strong" sx={{ textTransform: 'uppercase', color: theme.palette.black }}>Дата
                            публікації:</Box> 10/10/2024
                    </Typography>
                </Box>
                <Box sx={{textAlign: 'justify'}}>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        У сучасному світі постійно щодня генерується мільярди гігабайт відео та зображень. Використання
                        традиційних методів роботи з такими великими обсягами інформації може бути потужно вимогливим та
                        неефективним. Методи глибокого навчання, такі як нейронні мережі, вже досліджуються як можливий
                        спосіб обробки цих візуальних даних, але багато з них ще не змогли досягти високої точності та
                        швидкості, що потрібні для багатьох застосувань. Використовуючи комплексний датасет зображень,
                        доктор Ткаченко розробив новий алгоритм глибокого навчання, який виявив значно точнішим у
                        розпізнаванні образів, ніж до цього існуючі методи. Крім того, цей новий алгоритм виявився
                        значно швидшим, демонструючи свої здатність обробляти великі обсяги візуальних даних у реальному
                        часі.
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Дослідження знову підкреслило важливість глибокого навчання в обробці візуальних даних і
                        підтримує потенціал його застосування в багатьох галузях, від медицини до безпілотних
                        автомобілів. Більше того, він закладає основу для майбутніх досліджень у цій області, прагнучи
                        досягти ще більшої точності і швидкості.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 600, textTransform: 'uppercase', color: theme.palette.primary.main }}>
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
    </AdminLayout>)
}
