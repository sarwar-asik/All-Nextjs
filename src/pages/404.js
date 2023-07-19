import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);


  return (
    <div>
      <Link href={"/"}>Go Home</Link>
      <img
        src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=1060&t=st=1689768070~exp=1689768670~hmac=68642109a183c074c333df4ade34a5e74ab3118f3e869bd1cf76a4e8d321b14c"
        width="100%"
        height="100%"
        alt=""
      />
    </div>
  );
};

export default ErrorPage;
