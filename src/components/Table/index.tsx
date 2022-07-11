import React, { useMemo } from "react";
import "./styles.css";
import Table from "./Table";

function index(props: any) {
  const { sales } = props;
  const columns = useMemo(
    () => [
      {
        Header: "WEEK ENDING",
        accessor: "weekEnding",
      },
      {
        Header: "RETAIL SALES",
        accessor: "retailSales",
      },
      {
        Header: "WHOLESALE SALES",
        accessor: "wholesaleSales",
      },
      {
        Header: "UNITS SOLD",
        accessor: "unitsSold",
      },
      {
        Header: "RETAILER MARGIN",
        accessor: "retailerMargin",
      },
    ],
    []
  );

  return (
    <div className='sta-table-wrapper'>
      <Table columns={columns} data={sales} />
    </div>
  );
}

export default index;
