import styles from './lifeCard.module.scss'
import ReadMoreBtn from '../ReadMoreBtn/ReadMoreBtn'

export default function LifeCard({ title, abstract, img, news }) {
    return (
        <div className={news ? styles.life__card__news : styles.life__card}>
            {!news && <h4>{title}</h4>}
            {img && (
                <div
                    className={news ? styles.life__img__news : styles.life_img}
                >
                    <img src={img} alt="" />
                </div>
            )}
            <p>{abstract}</p>
            <ReadMoreBtn href="#" news={news}>Читати далі</ReadMoreBtn>
        </div>
    )
}
