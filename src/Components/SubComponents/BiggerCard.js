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
const fshb = () => {
  return axios.get('https://www.livenewscafe.xyz/php-react-post-list/category-wise-allusers.php')
}
const BiggerCard = () => {

  // const products = useSelector((state) => state.allProducts.products);
  const {isLoading,data,isFetching} = useQuery('usernewss',fshb,{staleTime:300000})
  if(isLoading){
    return <h2>Loading...</h2>
  }

  const renderListt = data.data.filter(products=>products.PostPosition==2&products.PostList==""&products.Status=="1").map((product) => {

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
