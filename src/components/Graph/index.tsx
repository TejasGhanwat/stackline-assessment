import { LineChart, Line, } from 'recharts';
import React from 'react';
import './styles.css'

function index(props:any) {

  const {sales} = props    
  const months:Array<string> = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

    return (
        <div className='sta-graph-wrapper'>
            <p style={{ color:"rgb(130, 130, 130)",marginLeft:"24px", marginTop:"24px", fontWeight:"400"}}>Retail Sales</p>
            <div className='sta-graph'>
              <LineChart width={1400} height={100} data={sales}>
                <Line type="monotoneX"  strokeWidth={3} dot={false} dataKey="retailSales" stroke="#4ea6e6" />
                <Line type="monotoneX" dot={false} dataKey="wholesaleSales" stroke="#a4b1ba" strokeWidth={3} />
              </LineChart>
            </div>
              
            <div className='sta-month-wrapper'>
              {
                months.map((month:string)=><p className='sta-month-title'>{month}</p>)
              }
            </div>   
        </div>
    );
}

export default index;

