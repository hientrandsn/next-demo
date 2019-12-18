import React, { useEffect } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";
const Orders = props => {
  useEffect(() => {
    const res = fetch("https://dev-svc.cashbagb2b.vn/api/brand");
  });
  return (
    <div>
      Orders page
      <ul>
        <li>
          <Link href="/orders/1">order 1</Link>
        </li>
        <li>
          <Link href="/orders/2">order 2</Link>
        </li>
      </ul>
    </div>
  );
};
Orders.propTypes = {};

export default Orders;
