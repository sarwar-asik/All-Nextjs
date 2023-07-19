import Link from "next/link";
import React from "react";

const CatchAllRoute = () => {
  return (
    <div>
      this is for filtering
      <br />
      <br />
      <Link href={"/"}>Go Home</Link>
    </div>
  );
};

export default CatchAllRoute;
