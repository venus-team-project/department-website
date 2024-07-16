import styles from './loadMoreBtn.module.scss'

export default function LoadMoreBtn({ onClick }) {
    return (
        <button onClick={onClick} className={styles.btn}>
            Завантажити ще
        </button>
    )
}
