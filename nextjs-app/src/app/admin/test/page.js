"use client";

import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, Typography } from '@mui/material';
import Image from 'next/image';
import SideMenu from '../../../components/admin/SideMenu';
import Header from '../../../components/admin/Header';
import theme from '../../../app/theme.js';

const drawerWidth = 240;
const drawerBreakpoint = 900;

export default function NewPage() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth < drawerBreakpoint);
                if (window.innerWidth >= drawerBreakpoint) {
                    setMobileOpen(true);
                }
            }
        };

        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < drawerBreakpoint);
            setMobileOpen(window.innerWidth >= drawerBreakpoint);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <SideMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} isMobile={isMobile} />
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, transition: 'margin-left 0.3s', marginLeft: mobileOpen && !isMobile ? `${drawerWidth}px` : '0' }}>
                <Header handleDrawerToggle={handleDrawerToggle} pageTitle="Нова Сторінка" />
                <Box sx={{ mt: 4 }}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Контент з текстом і зображенням.

                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet blanditiis consectetur
                            distinctio expedita fuga, ipsam maiores, modi, optio quas quos sit temporibus voluptates.
                            Autem cum delectus placeat qui rerum.</div>
                        <div>Aliquam, culpa delectus dicta eaque, enim error est exercitationem fugiat, itaque iure
                            laboriosam laudantium libero maiores molestiae praesentium quae quo quos ratione repellendus
                            similique sint tenetur totam vero voluptate voluptatibus.
                        </div>
                        <div>Doloribus ipsam laborum nostrum perspiciatis quia sequi sunt totam vero? A autem
                            dignissimos harum ipsa, ipsam ut. Debitis dolor, eaque, enim in inventore iure maxime, nam
                            quia suscipit ut voluptate.
                        </div>
                        <div>At dolorem excepturi nihil omnis quaerat quo rem! Adipisci doloremque esse ipsa modi
                            perspiciatis soluta, tempore unde voluptates! At cumque eaque fugiat! Beatae esse fugiat
                            illum ipsum optio quas voluptatem.
                        </div>
                        <div>Ad assumenda doloremque esse eveniet explicabo facilis magni quam, quasi repellat tempora,
                            tenetur unde. Ex natus, sint. Eaque eum facilis maxime molestiae natus quos suscipit.
                            Assumenda dignissimos doloremque qui quibusdam.
                        </div>
                    </Typography>
                    <Image
                        src="https://icons.getbootstrap.com/assets/img/icons-hero@2x.png"
                        alt="Example"
                        layout="responsive"
                        maxWidth={'100%'}
                        height={'auto'}
                    />
                </Box>
            </Box>
        </Box>
    );
}