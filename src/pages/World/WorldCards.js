import React , { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card,Badge } from 'react-bootstrap';
import styled from "styled-components";
const Wrapper = styled.div`

.imgsmall{
  width:100%;
 height:250px; 
}
`;
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

const WorldContainer = styled.div`
.container.contindia {
    margin: 40px;

}
.square {
    display: flex;
    width: 100px;
    height: 20px;

    margin:5px 20px;
  }
  p.text {
    margin: -10px 10px;
    font-family: 'Outfit', sans-serif;
    font-weight: 900;
    font-size: x-large;
}
  
span.badge.bg-primary {
    cursor: pointer;
}
`;

const WorldCards = () => {
   
    
  const products = useSelector((state) => state.allProducts.products);
  const [isTruncated,setIsTruncated] = useState(true);
  return <>
  <WorldContainer>
  <ColoredLine color="red" />
  <div class="square">
  <p class="text">World</p>
</div>
 <div class="container">

  <div class='row'>{
   products.filter(products=>products.PostList!=""&products.CategoryName=='World'&products.Status==1).map((product) => {
   
    const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl,PostPosition } = product;

   const resultString = isTruncated ? PostDetails.slice(0,100) : PostDetails;

   function toggleIsTruncated(){
       setIsTruncated(!isTruncated);
   }
   
   return  (
  
    <div class='col-md-4 col-sm-12'>
 
  
     <div class="card h-50">
     <Wrapper>
    <div class="card-horizontal">
        <div class="img-square-wrapper">
            <img class="imgsmall" src={PostUrl} alt="Card image cap"/>
        </div>
     
        <div class="card-body">
            <h4 class="card-title">{CategoryName}</h4>
            <Link to={`/news/${id}`}>
            <p class="card-text">{resultString}
            </p></Link>
           {/* Invoking readmore function */}
            {/* <Badge onClick={toggleIsTruncated} bg="primary">Read More</Badge> */}
            <Link to={`/news/${id}`}><Badge  bg="primary">Read More</Badge></Link>
        </div>
       
    </div>
    </Wrapper>
    <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
    </div>
</div>
     </div>
)
})   
}
</div> 

</div>
</WorldContainer>

</>

 
};

export default WorldCards;
