'use client'

import styles from './page.module.scss'
import Container from '@/components/Container/Container'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

import { useEffect, useState } from 'react'

import LifeCard from '@/components/LifeCard/LifeCard'
import TwoColumnGreeting from '@/components/TwoColumnGreeting/TwoColumnGreeting'
import LoadMoreBtn from '@/components/LoadMoreBtn/LoadMoreBtn'

export default function News() {
    const [posts, setPosts] = useState([])
    const [start, setStart] = useState(0)
    const limit = 1

    const loadPosts = async () => {
        const responseText = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
        )
        const responseImg = await fetch(
            `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`
        )
        const newText = await responseText.json()
        const newImages = await responseImg.json()
        const newPosts = newText.map((post, index) => ({
            ...post,
            thumb: newImages[index].thumbnailUrl,
        }))
        setPosts((prevPosts) => [...prevPosts, ...newPosts])
    }

    useEffect(() => {
        loadPosts()
    }, [start])

    const handleLoadMore = () => {
        setStart((prevStart) => prevStart + limit)
    }

    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <TwoColumnGreeting imageSrc="/news/greeting.png">
                    <h1>Вітаємо із захистом дисертації!</h1>
                    <p>
                        Шановна Марія Іванівна! Від щирого серця вітаємо Вас із
                        успішним захистом дисертації! Це важливе досягнення є
                        результатом вашої наполегливої праці, відданості
                        науковим дослідженням та невпинного прагнення до знань.
                        Ваш внесок у розвиток агроінформаційних технологій є
                        неоціненним, і ми пишаємося тим, що ви є частиною нашої
                        команди. Бажаємо вам подальших наукових звершень, нових
                        відкриттів та реалізації всіх ваших професійних амбіцій.
                        Нехай ваші дослідження надихають колег і студентів, а
                        ваші наукові досягнення сприяють розвитку нашої кафедри
                        та української науки в цілому. З найкращими побажаннями,
                        Колектив Кафедри агроінформаційних технологій
                    </p>
                </TwoColumnGreeting>
                <section>
                    <Container>
                        <div className={styles.life}>
                            {posts.map((post) => (
                                <LifeCard
                                    key={post.id}
                                    title={""}
                                    img={post.thumb}
                                    abstract={post.body}
                                    news={true}
                                />
                            ))}
                            <div className={styles.life__btn}>
                                <LoadMoreBtn onClick={handleLoadMore}>
                                    Click
                                </LoadMoreBtn>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    )
}
