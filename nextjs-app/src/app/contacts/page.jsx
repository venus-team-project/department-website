'use client'

import styles from './page.module.scss'
import Container from '@/components/Container/Container'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { useEffect, useState } from 'react'

export default function Contacts() {
    const [posts, setPosts] = useState([])

    const loadPosts = async () => {
        try {
            const responsePosts = await fetch(
                'https://localhost/api/db/books/list'
            )
            const newPosts = await responsePosts.json()

            setPosts((prevPosts) => [...prevPosts, ...newPosts])
        } catch (error) {
            console.log(error)
        }
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
                        <p key={post.id}>{JSON.stringify(post)}</p>
                    ))}
                </Container>
            </main>
            <Footer />
        </div>
    )
}
