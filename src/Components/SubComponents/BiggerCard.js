import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Wrapper = styled.div`
.card-horizontal{
display: flex;
flex-direction:row;
}
img.card-img-top{
  width:100%;
  
}
`;
const BiggerCard = () => {
 console.log(useSelector((state) => state));
  const products = useSelector((state) => state.allProducts.products);
     
const renderListt = products.filter(products=>products.PostPosition==2&products.PostList==""&products.Status=="1").map((product) => {
  
 console.log(products+"Status");  
  const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl } = product;
  return (
    <Link to={`/product/${id}`}>
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
