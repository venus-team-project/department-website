import Link from 'next/link'
import styles from './readMoreBtn.module.scss'

export default function ReadMoreBtn({ children, href, news }) {
    return (
        <Link href={href} className={news ? styles.btn__news : styles.btn}>
            {children}
        </Link>
    )
}
