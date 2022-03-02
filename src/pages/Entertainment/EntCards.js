import React , { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
import styled from "styled-components";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5,
            width:150,
            margin:20
        }}
    />
);
const Wrapper = styled.div`

.imgsmall{
  width:200px;
  height:100px;
}
`;
const EntContainer = styled.div`
@media (min-width: 768px) {
.container.contindia {
    margin: 40px;
}}
.square {
    display: flex;
    width: 100px;
    height: 20px;

    margin:-15px 20px;
  }
  p.text {
    margin: 0 40px;
    font-family: 'Outfit', sans-serif;
    font-weight: 900;
    font-size: x-large;
}
  `;

const EntCards = () => {
   

  const products = useSelector((state) => state.allProducts.products);
  
  return <>
  <EntContainer>
  <ColoredLine color="red" />
  <div class="square">
  <p class="text">Entertainment</p>
</div>
 <div class="container contindia">

  <div class='row'>{
   products.filter(products=>products.PostList!=""&products.CategoryName=='Entertainment').map((product) => {
   
    const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl,PostPosition } = product;

   
   
   return  (
  
    <div class='col-md-4 col-sm-12'>
 
   <Link to={`/news/${id}`}>
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
</EntContainer>
</>

 
};

export default EntCards;
