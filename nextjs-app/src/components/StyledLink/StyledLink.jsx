import Link from 'next/link'
import styles from './styledLink.module.scss'

export default function StyledLink({ children, href, color }) {
    return (
        <Link href={href} className={`${styles.link} ${styles[color]}`}>
            {children}
        </Link>
    )
}
