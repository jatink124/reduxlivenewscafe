import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
import styled from "styled-components";
const Wrapper = styled.div`
.card-horizontal{
display: flex;
flex-direction:row;
}
.imgsmall{
  width:100px;
  height:100px;
}
`;
const HorizontalCards = () => {
 console.log(useSelector((state) => state));
  const products = useSelector((state) => state.allProducts.products);
  
  const renderList = products.filter(products=>products.id%2==0&products.PostList!="").map((product) => {
  
    const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl } = product;
    return (
      <Link to={`/product/${id}`}>
     <div class="card mb-5">
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
     </Link>
);
});     
const renderListt = products.filter(products=>products.id%2!=0 &products.PostList!="").map((product) => {
  
  const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl } = product;
  return (
    <Link to={`/product/${id}`}>
   <div class="card">
    <img
      src={PostUrl}
      class="card-img-top"
      alt="..."
      style={{ width: '18rem',height:'18rem' }}
   />
   {id}

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

const renderListtright = products.filter(person=>person.PostList=="").map((product) => {
  
  const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl } = product;
  var ty = PostTitle.split(".");
  return (
   <>
<Link to={`/product/${id}`}>
  <div class="card">
   <img class="card-img-top" src={PostUrl} alt="Card image cap"  style={{ width: '18rem',height:'18rem' }}></img>
  <div class="card-body">
    <h5 class="card-title">{CategoryName}</h5>
    {/* <p class="card-text">{PostList}</p> */}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{ty[0]}</li>
    <li class="list-group-item">{ty[1]}</li>
    <li class="list-group-item">{ty[2]}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</Link>
</>
);
}); 
  return <>
 <div className="row">
   <div className="col">
   {renderList}
   </div>
  
 </div>

   


</>;
};

export default HorizontalCards;
