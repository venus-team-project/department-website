import styles from './lifeCard.module.scss'
import ReadMoreBtn from '../ReadMoreBtn/ReadMoreBtn'

export default function LifeCard({ title, abstract, img }) {
    return (
        <div className={styles.life__card}>
            <h4>{title}</h4>
            {img && (
                <div className={styles.life__img}>
                    <img src={img} alt="" />
                </div>
            )}
            <p>{abstract}</p>
            <ReadMoreBtn href="#">Читати далі</ReadMoreBtn>
        </div>
    )
}
