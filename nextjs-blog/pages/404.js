
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../components/layout.module.css'

export default function Custom404() {
    return (
        <div className={styles.container}>
            <Head>
                <title>404-page not found</title>
            </Head>
            <Image
                priority
                src='/../public/images/404.jpeg'
                height={400}
                width={400}
                alt="404cat" />

            <div className={styles.backToHome}>
                <Link href="/">👈🏻 Back to Home</Link>

            </div>
        </div>
    )
}