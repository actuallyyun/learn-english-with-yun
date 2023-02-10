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
      <div className="grid justify-items-center font-sans ">
        <div className="w-11/12 md:3/4">
          <h1 className={`${utilStyles.headingXl} text-center`}>
            {data.title}
          </h1>
          <div className="text-slate-600 pb-2 text-center">
            <p>By {data.author}</p>
            <Date dateString={data.date} />{" "}
          </div>

          <br />
          <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
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
