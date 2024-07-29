'use client'

import React, { useState, useEffect } from 'react'
import {
    Box,
    CssBaseline,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableSortLabel,
    TablePagination,
    IconButton,
    useMediaQuery,
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import theme from '@/app/theme.js'
import AdminLayout from '@/components/admin/AdminLayout'

export default function SciencePublications() {
    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState('title')
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [publications, setPublications] = useState([])

    const getPublication = async () => {
        try {
            const response = await fetch(
                'https://department-website.bulhakov.dev/api/db/books/list'
            )

            const allPublications = await response.json()

            setPublications(allPublications)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        getPublication()
    }, [])

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const sortedSciencePublications = [...publications].sort((a, b) => {
        if (orderBy === 'title') {
            return order === 'asc'
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title)
        } else if (orderBy === 'author') {
            return order === 'asc'
                ? a.author.localeCompare(b.author)
                : b.author.localeCompare(a.author)
        } else if (orderBy === 'category') {
            return order === 'asc'
                ? a.category.localeCompare(b.category)
                : b.category.localeCompare(a.category)
        } else if (orderBy === 'date') {
            return order === 'asc'
                ? new Date(a.date) - new Date(b.date)
                : new Date(b.date) - new Date(a.date)
        }
        return 0
    })

    const displayedSciencePublications = sortedSciencePublications.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    )

    // const isSmallScreen = useMediaQuery('(max-width:600px)')
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <AdminLayout pageTitle="НАУКОВА РОБОТА">
            <CssBaseline />
            <TableContainer component={Paper} sx={{ mt: 2, overflowX: 'auto' }}>
                <Table
                    sx={{ minWidth: isSmallScreen ? 300 : 750 }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    backgroundColor:
                                        theme.palette.primary.extraLight,
                                    color: theme.palette.black,
                                    fontWeight: 'bold',
                                    display: { xs: 'none', sm: 'table-cell' },
                                }}
                            >
                                №
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor:
                                        theme.palette.primary.extraLight,
                                    color: theme.palette.black,
                                    fontWeight: 'bold',
                                }}
                            >
                                <TableSortLabel
                                    active={orderBy === 'title'}
                                    direction={
                                        orderBy === 'title' ? order : 'asc'
                                    }
                                    onClick={() => handleRequestSort('title')}
                                >
                                    Назва публікації
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor:
                                        theme.palette.primary.extraLight,
                                    color: theme.palette.black,
                                    fontWeight: 'bold',
                                    display: { xs: 'none', sm: 'table-cell' },
                                }}
                            >
                                <TableSortLabel
                                    active={orderBy === 'author'}
                                    direction={
                                        orderBy === 'author' ? order : 'asc'
                                    }
                                    onClick={() => handleRequestSort('author')}
                                >
                                    Автор
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor:
                                        theme.palette.primary.extraLight,
                                    color: theme.palette.black,
                                    fontWeight: 'bold',
                                    display: { xs: 'none', sm: 'table-cell' },
                                }}
                            >
                                <TableSortLabel
                                    active={orderBy === 'category'}
                                    direction={
                                        orderBy === 'category' ? order : 'asc'
                                    }
                                    onClick={() =>
                                        handleRequestSort('category')
                                    }
                                >
                                    Категорія
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor:
                                        theme.palette.primary.extraLight,
                                    color: theme.palette.black,
                                    fontWeight: 'bold',
                                }}
                            >
                                <TableSortLabel
                                    active={orderBy === 'date'}
                                    direction={
                                        orderBy === 'date' ? order : 'asc'
                                    }
                                    onClick={() => handleRequestSort('date')}
                                >
                                    Дата
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor:
                                        theme.palette.primary.extraLight,
                                    color: theme.palette.black,
                                    fontWeight: 'bold',
                                }}
                            >
                                Дія
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {displayedSciencePublications.map(
                            (publication, index) => (
                                <TableRow key={publication.id}>
                                    <TableCell
                                        sx={{
                                            display: {
                                                xs: 'none',
                                                sm: 'table-cell',
                                            },
                                        }}
                                    >
                                        {index + 1 + page * rowsPerPage}
                                    </TableCell>
                                    <TableCell>
                                        <a
                                            href="/admin/science/1"
                                            style={{
                                                color: theme.palette.primary
                                                    .main,
                                                textDecoration: 'none',
                                            }}
                                        >
                                            {publication.title}
                                        </a>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            display: {
                                                xs: 'none',
                                                sm: 'table-cell',
                                            },
                                        }}
                                    >
                                        {publication.author}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            display: {
                                                xs: 'none',
                                                sm: 'table-cell',
                                            },
                                        }}
                                    >
                                        {publication.category}
                                    </TableCell>
                                    <TableCell>{publication.date}</TableCell>
                                    <TableCell>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: isSmallScreen
                                                    ? 'column'
                                                    : 'row',
                                                gap: '0.5rem',
                                            }}
                                        >
                                            <IconButton
                                                sx={{
                                                    color: 'white',
                                                    backgroundColor:
                                                        theme.palette.admin
                                                            .grey,
                                                    borderRadius: '4px',
                                                    width: '36px',
                                                    height: '36px',
                                                    '&:hover': {
                                                        backgroundColor:
                                                            theme.palette.admin
                                                                .grey,
                                                        filter: 'brightness(0.85)',
                                                    },
                                                }}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton
                                                sx={{
                                                    color: 'white',
                                                    backgroundColor:
                                                        theme.palette.admin.red,
                                                    borderRadius: '4px',
                                                    width: '36px',
                                                    height: '36px',
                                                    '&:hover': {
                                                        backgroundColor:
                                                            theme.palette.admin
                                                                .red,
                                                        filter: 'brightness(0.85)',
                                                    },
                                                }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    component="div"
                    count={SciencePublications.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </AdminLayout>
    )
}
