import React,{Suspense} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
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
 console.log(useSelector((state) => state));
  const products = useSelector((state) => state.allProducts.products);
  const catproducts = useSelector((state) => state.catallProducts.catproducts);

  return <>
 <div className="row">
   <div className="col-md-4">
   {/* <Suspense fallback={<div>Loading...</div>}>
  <TopLeft/>
  </Suspense> */}

  <TopLeft/>
 
   </div>
   <div className="col-md-4">
 
   <BiggerCard/>
 
     </div>
     <div className="col-md-4">

  <CardList/>

     </div>
 </div>
<HorizontalCards name={"I am present"}/>
{/* <Services_Section/> */}
<Blog/>
<FocussedCard/>

   </>;
};

export default ProductComponent;
