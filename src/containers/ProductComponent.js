import React,{Suspense} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
import axios from "axios";
import {useQuery} from 'react-query'
import styled from "styled-components";

//import HorizontalCards from "../Components/SubComponents/HorizontalCards";
// import BiggerCard from "../Components/SubComponents/BiggerCard";
import CardList from "../Components/SubComponents/CardList";


// import TopLeft from "../Components/SubComponents/TopLeft";
// const TopLeft = React.lazy(() => {
//   return new Promise(resolve => setTimeout(resolve, 1 * 1000)).then(
//     () =>
//     import("../Components/SubComponents/TopLeft")
      
//   );
// });
// const BiggerCard = React.lazy(() => {
//   return new Promise(resolve => setTimeout(resolve, 7 * 1000)).then(
//     () =>
//      import("../Components/SubComponents/BiggerCard")
       
//   );
// });
import BiggerCard from "../Components/SubComponents/BiggerCard";
import FocussedCard from "../Components/SubComponents/FocussedCard";
import Services_Section from "../Components/Services_Section";
import Blog from "../Components/Blog";
import Footer from "../Footer";
// const CardList = React.lazy(() => import('../Components/SubComponents/CardList'));
const TopLeft = React.lazy(() => import('../Components/SubComponents/TopLeft'));
const HorizontalCards = React.lazy(() => import('../Components/SubComponents/HorizontalCards'));

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

const ProductComponent = () => {
  
  //  console.log(useSelector((state) => state));
//   const products = useSelector((state) => state.allProducts.products);
//   const catproducts = useSelector((state) => state.catallProducts.catproducts);
const fshb = () => {
  return axios.get('https://www.livenewscafe.xyz/php-react-post-list/category-wise-allusers.php')
}
const count=0;
const {isLoading,data,isFetching} = useQuery('usernewss',fshb,{staleTime:300000})
if(isLoading){
  return <h2></h2>
}
var topleft=data.data.filter(products=>products.PostPosition==1&products.Status=="1").map((p)=>p);
var biggercard=data.data.filter(products=>products.PostPosition==2&products.Status=="1").map((p)=>p);
var cardlist=data.data.filter(products=>products.PostPosition==3&products.Status=="1").map((p)=>p);
var horizontalcard=data.data.filter(products=>products.PostPosition==1&products.Status=="1").map((p)=>p);

// console.log(returneddata[0]);

return <>
 <div className="row">
   <div className="col-md-4">
    {/* <Suspense fallback={<div>Loading...</div>}>
  <TopLeft/>
  </Suspense>  */}


  <TopLeft arr={topleft}/>
 
   </div>
   <div className="col-md-4">
 
   <BiggerCard arr={biggercard}/>
 
     </div>
     <div className="col-md-4">

  <CardList arr={cardlist}/>

     </div>
 </div>
<HorizontalCards arr={horizontalcard}/>
{/* <Services_Section/> */}
<Blog/>

{/* <FocussedCard/> */}

   </>;
};

export default ProductComponent;
