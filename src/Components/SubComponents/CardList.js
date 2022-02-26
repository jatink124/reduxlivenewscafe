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
.imgsmall{
  width:100%;
 height:250px; 
}
`;
const CardList = () => {
 console.log(useSelector((state) => state));
  const products = useSelector((state) => state.allProducts.products);
  const renderListtright = products.filter(products=>products.PostList!=""&products.PostPosition==3&products.Status=="1").map((product) => {
  
  const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl,PostList } = product;
  
  var ty = PostList.split(".");
 
  return (
   <>
<Link to={`/news/${id}`}>
  <div class="card">
   {/* <img class="card-img-top" src={PostUrl} alt="Card image cap" ></img> */}
   <LazyLoadImage
 className="card-img-top imgsmall"
      src={PostUrl} // use normal <img> attributes as props
      effect="blur"
      />
  <div class="card-body">
    <h5 class="card-title">{CategoryName}</h5>
    {/* <p class="card-text">{PostList}</p> */}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{ty[0]}</li>
    <li class="list-group-item">{ty[1]}</li>
    <li class="list-group-item">{ty[2]}</li>
  </ul>
  {/* <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div> */}
</div>
</Link>
</>
);
}); 
  return <>
 <div className="row">
   <div className="col">
   {renderListtright}
   </div>
  
 </div>

   


</>;
};

export default CardList;
