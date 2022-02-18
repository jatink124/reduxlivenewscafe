import React , { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Wrapper = styled.div`

.imgsmall{
  width:100%;
object-fit:cover;
}
`;

const TopLeft = () => {

  const products = useSelector((state) => state.allProducts.products);

  const renderListt= products.filter(products=>products.PostPosition==1&products.PostList==""&products.Status==1).map((product) => {
   const {id,CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl,PostPosition} = product;
return  (
    <div class='row'>
   <div class='col'>
 <div class="card">
     <Wrapper>
    <div class="card-horizontal">
        <div class="img-square-wrapper">
        <LazyLoadImage
 className="imgsmall"
      src={PostUrl} // use normal <img> attributes as props
      effect="blur"
      />
        </div>
     
        <div class="card-body">
            {/* <h4 class="card-title">{CategoryName}</h4> */}
            <Link to={`/product/${id}`}>
            <p class="card-text"><b>{PostTitle}</b></p></Link>
        </div>
       
    </div>
    </Wrapper>
    <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
    </div>
</div>
     </div></div>
)
})   


return <>
{renderListt}
</>;

 
};

export default TopLeft;
