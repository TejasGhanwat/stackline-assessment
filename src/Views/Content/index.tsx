import React, {useState, useEffect} from 'react';
import { PRODUCT } from '../../Interfaces/product';
import data from '../../data/stackline_frontend_assessment_data_2021.json'
import RightContent from './RightContent';
import Sidebar from './Sidebar';
import './styles.css'

function Content() {

    const [productData, setProductData] = useState<PRODUCT[]>([]) 

  useEffect(()=>{
      setProductData(data)
  }, [])

  console.log(data)
    return (
        <div className="sta-content-wrapper">
            <Sidebar data={data}/>
            <RightContent />
        </div>
    );
}

export default Content;