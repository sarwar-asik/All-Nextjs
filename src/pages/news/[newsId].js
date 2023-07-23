import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const NewsDetailPage = ({ news }) => {
  return (
    <div>
      <h2> {news?.title} Detail Page </h2>
    </div>
  );
};

export default NewsDetailPage;

NewsDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/news`);
  const newses = await res.json();
  const paths = newses?.map((news) => ({
    params: { newsId: news?.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`http://localhost:5000/news/${params?.newsId}`);
  const data = await res.json();
  console.log("🚀 ~ file: [newsId].js:21 ~ getStaticProps ~ data:", data);
  return {
    props: {
      news: data,
    },
  };
};
