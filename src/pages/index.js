import RootLayout from "../../components/layouts/RootLayout";

const HomePages = () => {
  return (
    <>
      <h2>This is Next Home pages </h2>
      
    </>
  );
};

export default HomePages;

HomePages.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
};
