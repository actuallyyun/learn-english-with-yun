import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hi I am Yun</p>
        <p>
          I built web applications with Python/Django. I am studying front-end development with MigraCode Barcelona.I give private English lessons and write articles about climbing. Before that, I worked as a Senior Tech Reporter in Beijing.I interpreted for Elon Musk,and interviwed the founder of TikTok when Tiktok had not been created yet.
        </p>
      </section>
    </Layout>
  )
}