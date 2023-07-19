import { Button } from "antd";
import Link from "next/link";
import React from "react";

const NewsHomePage = () => {
  return (
    <div>
      <h2>This is news main page</h2>
      <Button type="primary">
        <Link href="/">Go Home </Link>{" "}
      </Button>
    </div>
  );
};

export default NewsHomePage;
