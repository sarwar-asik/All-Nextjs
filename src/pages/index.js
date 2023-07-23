import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import AllNews from "@/components/UI/AllNews";
import { useGetNewsQuery } from "@/redux/api/api";
import dynamic from "next/dynamic";

const HomePage = ({ allNews }) => {
  console.log( allNews);
  const {data} = useGetNewsQuery()

  console.log("🚀 ~ file: index.js:10 ~ HomePage ~ data:", data)


  const DynamicBanner = dynamic(() => import('@/components/UI/Banner'), {
    loading: () => <h2>Loading Banner...</h2>,
    ssr:false
  })


  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Banner /> */}
      <DynamicBanner></DynamicBanner>

      <AllNews allNews={data}></AllNews>
      <h3>All News </h3>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const data = await res.json();
//   // console.log("🚀 ~ file: index.js:32 ~ getStaticProps ~ data:", data);

//   return {
//     props: {
//       allNews: data,
//     },
//     revalidate: 30,
//   };
// };

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();
  // console.log("🚀 ~ file: index.js:32 ~ getStaticProps ~ data:", data);

  return {
    props: {
      allNews: data,
    },
    // revalidate: 30,
  };
};
