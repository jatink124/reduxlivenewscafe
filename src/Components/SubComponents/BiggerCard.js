import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from "axios";
import {useQuery} from 'react-query'
const Wrapper = styled.div`
.card-horizontal{
display: flex;
flex-direction:row;
}
img.card-img-top{
  width:100%;
  
}
`;

const BiggerCard = ({arr}) => {
const renderListt = arr.map((product) => {

  const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl } = product;
  return (
    <Link to={`/news/${id}`}>
   <div class="card" >
    {/* <img
      src={PostUrl}
      class="card-img-top"
      alt="..."
      
   /> */}
   <LazyLoadImage
 className="card-img-top imgsmall"
      src={PostUrl} // use normal <img> attributes as props
      effect="blur"
      />

    <div class="card-body">
      <h5 class="card-title">{PostTitle}</h5>
      <p class="card-text">
      {CategoryName}
      </p>
    </div>
    
   </div>
   </Link>
);
});  

 
  return <>

   {renderListt}
  

   


</>;
};

export default BiggerCard;
