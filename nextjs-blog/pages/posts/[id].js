import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post(postData) {
  const data = postData.postData;
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>

      <h1 className={utilStyles.headingXl}>{data.title}</h1>
      <br />
      <div className={utilStyles.lightText}>
        <Date dateString={data.date} />
      </div>
      <div>{data.preview}</div>

      <br />
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
