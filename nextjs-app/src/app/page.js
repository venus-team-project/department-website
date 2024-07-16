'use client'

import Container from '@/components/Container/Container'
import styles from './page.module.scss'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import TwoColumnGreeting from '@/components/TwoColumnGreeting/TwoColumnGreeting'
import LifeCard from '@/components/LifeCard/LifeCard'
import { useEffect, useState } from 'react'
import LoadMoreBtn from '@/components/LoadMoreBtn/LoadMoreBtn'

export default function Home() {
    const [posts, setPosts] = useState([])
    const [start, setStart] = useState(0)
    const limit = 3

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
                <TwoColumnGreeting imageSrc="/home/greeting.png">
                    <h1>Вітаємо у світі сучасних аграрних технологій!</h1>
                    <p>
                        Кафедра агроінформаційних технологій є сучасним центром
                        освіти і наукових досліджень у сфері застосування
                        інформаційних технологій в аграрному секторі.
                    </p>
                    <p>
                        Наші студенти отримують не тільки фундаментальні знання
                        в галузі агрономії та інформаційних технологій, але й
                        набувають практичних навичок, необхідних для успішної
                        кар'єри в сучасному аграрному світі. Запрошуємо вас
                        ознайомитися з нашими освітніми програмами, науковими
                        дослідженнями та досягненнями. Ми завжди відкриті до
                        співпраці та нових ідей. Приєднуйтесь до нас, щоб разом
                        створювати майбутнє агроінформаційних технологій!
                    </p>
                </TwoColumnGreeting>
                <section>
                    <Container>
                        <div className={styles.life}>
                            {posts.map((post) => (
                                <LifeCard
                                    key={post.id}
                                    title={post.title}
                                    img={post.thumb}
                                    abstract={post.body}
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
