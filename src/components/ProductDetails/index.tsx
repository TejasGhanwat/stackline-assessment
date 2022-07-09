import React from 'react';
import './styles.css'

function ProductDetails(props:any) {
    const {data} = props;
    const productData = data[0]

    return (
        <div className= 'sta-product-details-wrapper'>
            <div className='sta-image-title-wrapper'>
                <img className='sta-product-image' src={productData.image} alt="product" />
                <h2>{productData.title}</h2>
                <p className= 'sta-product-subtitle'>{productData.subtitle}</p>
            </div>
            <div className= 'sta-tag-wrapper'>
            {
                productData.tags.map((tag:string) =>{
                    return <span className="sta-tag">{tag}</span>
                })
            }
            </div>
        </div>
    );
}

export default ProductDetails;