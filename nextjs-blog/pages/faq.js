import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import getSortedMarkdownData from "../lib/getMarkDownData";

//test if data passed  to the component correctly

export default function FAQ(faqData) {
  console.log(faqData);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="grid justify-items-center bg-gradient-to-t from-slate-100 font-sans">
        <div className="w-11/12 md:w-3/4">
          <h3>{faqData.faqData.title}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: faqData.faqData.contentHtml }}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const faqPath = "/public/infos/faq.md";
  const faqData = await getSortedMarkdownData(faqPath);
  return { props: { faqData } };
}
