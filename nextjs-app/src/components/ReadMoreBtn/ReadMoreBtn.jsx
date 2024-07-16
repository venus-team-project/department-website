import Link from 'next/link'
import styles from './readMoreBtn.module.scss'

export default function ReadMoreBtn({ children, href }) {
    return (
        <Link href={href} className={styles.btn}>
            {children}
        </Link>
    )
}
