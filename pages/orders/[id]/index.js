import React from "react";

import PropTypes from "prop-types";
import { useRouter } from "next/dist/client/router";

const OrderDetail = props => {
  const router = useRouter();
  return <div>order {router?.query?.id}</div>;
};
OrderDetail.propTypes = {};

export default OrderDetail;
