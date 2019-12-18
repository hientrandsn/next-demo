import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

function Page({ stars }) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      Next stars: {stars}
      <button onClick={() => setIsLogin(true)}>
        {isLogin ? "Hello Alumni" : "Login"}
      </button>
      <Link href="/orders">Go to orders</Link>
    </div>
  );
}

Page.getInitialProps = async ({ req }) => {
  const res = await fetch("https://dev-svc.cashbagb2b.vn/api/brand");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Page;
