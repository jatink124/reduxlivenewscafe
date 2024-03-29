import React , { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from "axios";
import {useQuery} from 'react-query'
const Wrapper = styled.div`

.imgsmall{
  width:100%;
  height:70%;
object-fit:cover;
}
.imgsmalll{
  width:350px;
  height:230px;
  object-fit:cover;
}
`;


const TopLeft = ({arr}) => {
 const renderListt= arr.filter(products=>products.PostPosition==1&products.Status==1).map((product) => {
   const {id,CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl,PostPosition} = product;
return  (
    <div class='row '>
   <div class='col'>
 <div class="card">
     <Wrapper>
    <div class="card-horizontal">
        <div class="img-square-wrapper">
        <LazyLoadImage
 className="imgsmall d-md-none"
      src={PostUrl} // use normal <img> attributes as props
      effect="blur"
     
     />
        <LazyLoadImage
 className="imgsmalll d-xs-none d-none d-md-block"
      src={PostUrl} // use normal <img> attributes as props
      effect="blur"
     
     />
        </div>
     
        <div class="card-body">
            {/* <h4 class="card-title">{CategoryName}</h4> */}
            <Link to={`/news/${id}`}>
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
