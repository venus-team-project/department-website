"use client";

import React, {useState, useEffect} from 'react';
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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import theme from '../theme.js';

import SideMenu from '../../components/admin/SideMenu';
import Header from '../../components/admin/Header';

import publications from './publications.json';

const drawerWidth = 240;
const drawerBreakpoint = 900;

export default function Publications() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('title');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [mobileOpen, setMobileOpen] = useState(window.innerWidth >= drawerBreakpoint);
    const [isMobile, setIsMobile] = useState(window.innerWidth < drawerBreakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < drawerBreakpoint);
            if (window.innerWidth >= drawerBreakpoint) {
                setMobileOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const sortedPublications = [...publications].sort((a, b) => {
        if (orderBy === 'title') {
            return order === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        } else if (orderBy === 'author') {
            return order === 'asc' ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author);
        } else if (orderBy === 'category') {
            return order === 'asc' ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category);
        } else if (orderBy === 'date') {
            return order === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
        }
        return 0;
    });

    const displayedPublications = sortedPublications.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <SideMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} isMobile={isMobile}/>
            <Box component="main" sx={{
                flexGrow: 1,
                bgcolor: 'background.default',
                p: 3,
                transition: 'margin-left 0.3s',
                marginLeft: mobileOpen && !isMobile ? `${drawerWidth}px` : '0'
            }}>
                <Header handleDrawerToggle={handleDrawerToggle} pageTitle="НАУКОВА РОБОТА"/>
                <TableContainer component={Paper} sx={{mt: 2}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{
                                    backgroundColor: theme.palette.primary.extraLight,
                                    color: theme.palette.black
                                }}>№</TableCell>
                                <TableCell sx={{backgroundColor: theme.palette.primary.extraLight, color: theme.palette.black}}>
                                    <TableSortLabel
                                        active={orderBy === 'title'}
                                        direction={orderBy === 'title' ? order : 'asc'}
                                        onClick={() => handleRequestSort('title')}
                                    >
                                        Назва публікації
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell sx={{backgroundColor: theme.palette.primary.extraLight, color: theme.palette.black}}>
                                    <TableSortLabel
                                        active={orderBy === 'author'}
                                        direction={orderBy === 'author' ? order : 'asc'}
                                        onClick={() => handleRequestSort('author')}
                                    >
                                        Автор
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell sx={{backgroundColor: theme.palette.primary.extraLight, color: theme.palette.black}}>
                                    <TableSortLabel
                                        active={orderBy === 'category'}
                                        direction={orderBy === 'category' ? order : 'asc'}
                                        onClick={() => handleRequestSort('category')}
                                    >
                                        Категорія
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell sx={{backgroundColor: theme.palette.primary.extraLight, color: theme.palette.black}}>
                                    <TableSortLabel
                                        active={orderBy === 'date'}
                                        direction={orderBy === 'date' ? order : 'asc'}
                                        onClick={() => handleRequestSort('date')}
                                    >
                                        Дата
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell sx={{
                                    backgroundColor: theme.palette.primary.extraLight,
                                    color: theme.palette.black
                                }}>Дія</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {displayedPublications.map((publication, index) => (
                                <TableRow key={publication.id}>
                                    <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                                    <TableCell>
                                        <a href="#" style={{color: theme.palette.primary.main, textDecoration: 'none'}}>
                                            {publication.title}
                                        </a>
                                    </TableCell>
                                    <TableCell>{publication.author}</TableCell>
                                    <TableCell>{publication.category}</TableCell>
                                    <TableCell>{publication.date}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            sx={{
                                                color: 'white',
                                                backgroundColor: theme.palette.admin.grey,
                                                borderRadius: '4px',
                                                mr: 1,
                                                '&:hover': {
                                                    backgroundColor: theme.palette.admin.grey,
                                                    filter: 'brightness(0.85)',
                                                },
                                            }}
                                        >
                                            <EditIcon/>
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                color: 'white',
                                                backgroundColor: theme.palette.admin.red,
                                                borderRadius: '4px',
                                                '&:hover': {
                                                    backgroundColor: theme.palette.admin.red,
                                                    filter: 'brightness(0.85)',
                                                },
                                            }}
                                        >
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        component="div"
                        count={publications.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            </Box>
        </Box>
    );
}
