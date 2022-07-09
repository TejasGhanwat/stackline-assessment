import Graph from '../../../components/Graph'
import Table from '../../../components/Table'
import './styles.css'
import React from 'react';

function RightContent(props:any) {
    return (
        <div className='sta-right-content'>
           <Graph sales = {props.sales}/>
           <Table />
        </div>
    );
}

export default RightContent;