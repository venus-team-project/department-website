import Image from 'next/image'
import Container from '../Container/Container'
import styles from './twoColumnGreeting.module.scss'

export default function TwoColumnGreeting({ children, imageSrc }) {
    return (
        <section className={styles.greeting}>
            <Container>
                <div className={styles.greeting__wrapper}>
                    <div className={styles.greeting__text}>{children}</div>
                    <div className={styles.greeting__img}>
                        <Image src={imageSrc} fill objectFit="cover" />
                    </div>
                </div>
            </Container>
        </section>
    )
}
