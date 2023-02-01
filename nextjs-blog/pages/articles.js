import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Articles({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="grid justify-items-center bg-gradient-to-t from-slate-100 font-sans">
        <div className="w-11/12 md:w-3/4">
          <section className={`${utilStyles.headingMd}`}>
            <h2 className={utilStyles.headingLg}>Articles</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, author, title, preview }) => (
                <li className={`utilStyles.listItem pb-5`} key={id}>
                  <Link href={`/articles/${id}`}>{title}</Link>
                  <p className="py-2 text-base">By {author}</p>

                  <p className="text-base">{preview}</p>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
