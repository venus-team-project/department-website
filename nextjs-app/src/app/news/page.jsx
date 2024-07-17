import styles from './page.module.scss'
import Container from '@/components/Container/Container'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export default function News() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <Container>
                    <p>In development...</p>
                </Container>
            </main>
            <Footer />
        </div>
    )
}
