import React from "react";
import RootLayout from "../../components/layouts/RootLayout";

const ABoutPage = () => {
  return (
    <div>
      <h2>This is about page</h2>
    </div>
  );
};

export default ABoutPage;


ABoutPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
};
