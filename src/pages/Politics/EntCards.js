import React , { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
import styled from "styled-components";
const Wrapper = styled.div`

.imgsmall{
  width:200px;
  height:100px;
}
`;

const EntCards = () => {
   
    console.log(useSelector((state) => state));
  const products = useSelector((state) => state.allProducts.products);
  
  return <>
 <div class="container">

  <div class='row'>{
   products.filter(products=>products.PostList!=""&products.CategoryName=='Bollywood').map((product) => {
   
    const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl,PostPosition } = product;

   
   
   return  (
  
   <div class='col'>
 
   <Link to={`/product/${id}`}>
     <div class="card">
     <Wrapper>
    <div class="card-horizontal">
        <div class="img-square-wrapper">
            <img class="imgsmall" src={PostUrl} alt="Card image cap"/>
        </div>
     
        <div class="card-body">
            <h4 class="card-title">{CategoryName}</h4>
            <p class="card-text">{PostDetails}</p>
        </div>
       
    </div>
    </Wrapper>
    <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
    </div>
</div>
     </Link></div>
)
})   
}
</div> 

</div>
</>

 
};

export default EntCards;
