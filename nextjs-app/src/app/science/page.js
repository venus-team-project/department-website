import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box } from '@mui/material'

export default function Science() {
    return (
        <>
            <Header />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    fontSize: 42,
                }}
            ></Box>
            <Footer />
        </>
    )
}
