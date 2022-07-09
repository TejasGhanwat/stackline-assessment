import React, {useMemo} from 'react';
import './styles.css'
import Table from './Table'

function index(props:any) {

    const {sales} = props
    const columns = useMemo(
        () => [
          {
            // first group - TV Show
            Header: "WEEK ENDING",
            accessor: "weekEnding"
          },
          {
            // first group - TV Show
            Header: "RETAIL SALES",
            accessor: "retailSales"
          },
          {
            // first group - TV Show
            Header: "WHOLESALE SALES",
            accessor: "wholesaleSales"
          },
          {
            // first group - TV Show
            Header: "UNITS SOLD",
            accessor: "unitsSold"
          },
          {
            // first group - TV Show
            Header: "RETAILER MARGIN",
            accessor: "retailerMargin"
          },
        ],
        []
      );    

    console.log(sales)
    return (
        <div className="sta-table-wrapper">
            <Table columns={columns} data={sales} />
        </div>
    );
}

export default index;