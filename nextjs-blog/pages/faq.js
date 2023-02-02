import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const getAllFaqs = () => {
  const faq = [
    { q: "a test question 1", a: "a test answer 1" },
    {
      q: "test question 2",
      a: "test answer 2",
    },
  ];
  return { params: { faqs: faq } };
};

const FAQ = (faqs) => {
  console.log(faqs);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="grid justify-items-center bg-gradient-to-t from-slate-100 font-sans">
        <div className="w-11/12 md:w-3/4">wip</div>
      </div>
    </Layout>
  );
};

export default FAQ;
