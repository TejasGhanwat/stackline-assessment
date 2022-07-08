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
    return (
        <div className="sta-content-wrapper">
            <Sidebar />
            <RightContent />
        </div>
    );
}

export default Content;