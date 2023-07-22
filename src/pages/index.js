// import RootLayout from "../../../components/layouts/RootLayout";
// import RootLayout from "@/components/layouts/RootLayout";
import Head from "next/head";
import RootLayout from "../../components/layouts/RootLayout";

const HomePages = () => {
  return (
    <div>
      <Head>
        <title>my Home page</title>
        <meta name="home page" description='this is sarwar next home page' />
      </Head>
      <h2>This is Next Home pages </h2>
    </div>
  );
};
       
export default HomePages;

HomePages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
//
