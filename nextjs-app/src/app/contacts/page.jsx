'use client'

import styles from './page.module.scss'
import Container from '@/components/Container/Container'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { useEffect, useState } from 'react'

export default function Contacts() {
    const [posts, setPosts] = useState([])

    const loadPosts = async () => {
        const responsePosts = await fetch(
            'http://localhost:8080/api/db/books/list'
        )
        const newPosts = await responsePosts.json()

        setPosts((prevPosts) => [...prevPosts, ...newPosts])
    }

    useEffect(() => {
        loadPosts()
    }, [])

    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <Container>
                    <p>In development... (test)</p>
                    {posts.map((post) => (
                        <p>{JSON.stringify(post)}</p>
                    ))}
                </Container>
            </main>
            <Footer />
        </div>
    )
}
