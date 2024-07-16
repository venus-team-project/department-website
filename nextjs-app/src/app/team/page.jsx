import styles from '../page.module.scss'
import Container from '@/components/Container/Container'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export default function Team() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <Container>
                    <p>Test</p>
                </Container>
            </main>
            <Footer />
        </div>
    )
}
