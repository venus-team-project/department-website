import Container from '../Container/Container'
import StyledLink from '../StyledLink/StyledLink'
import styles from './footer.module.scss'

const GeoIcon = () => {
    return (
        <svg
            width="12"
            height="17"
            viewBox="0 0 12 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 6C12 2.69 9.31 0 6 0C2.69 0 0 2.69 0 6C0 10.5 6 17 6 17C6 17 12 10.5 12 6ZM4 6C4 4.9 4.9 4 6 4C7.1 4 8 4.9 8 6C8 7.1 7.11 8 6 8C4.9 8 4 7.1 4 6Z"
                fill="#5E6063"
            />
        </svg>
    )
}

const AtIcon = () => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20H15V18H10C5.66 18 2 14.34 2 10C2 5.66 5.66 2 10 2C14.34 2 18 5.66 18 10V11.43C18 12.22 17.29 13 16.5 13C15.71 13 15 12.22 15 11.43V10C15 7.24 12.76 5 10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C11.38 15 12.64 14.44 13.54 13.53C14.19 14.42 15.31 15 16.5 15C18.47 15 20 13.4 20 11.43V10C20 4.48 15.52 0 10 0ZM10 13C8.34 13 7 11.66 7 10C7 8.34 8.34 7 10 7C11.66 7 13 8.34 13 10C13 11.66 11.66 13 10 13Z"
                fill="#5E6063"
            />
        </svg>
    )
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.copyright}>
                        <span>© Бориславський лісовий університет</span>
                    </div>
                    <div className={styles.contacts}>
                        <div>
                            <span>
                                <GeoIcon />
                            </span>
                            21000, м. Борислав, вул. Незалежності 40
                        </div>
                        <div>
                            <span>
                                <AtIcon />
                            </span>
                            <StyledLink
                                href="mailto:blu@gmail.com"
                                color="contrast"
                            >
                                blu@gmail.com
                            </StyledLink>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
