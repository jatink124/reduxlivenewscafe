import React, { useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts,setProductsCat } from "../../redux/actions/productsActions";
import HorizontalCards from "../../Components/SubComponents/HorizontalCards";
import TechCards from "./TechCards";



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
const Technology = () => {
 console.log(useSelector((state) => state)+"dsfd");
  const products = useSelector((state) => state.allProducts.products);
  const catproducts = useSelector((state) => state.catallProducts.catproducts);
  const cat = "Sports"
  const dispatch = useDispatch();
  
  const fetchProducts = async () => {
    const response = await axios
      .get("https://www.livenewscafe.xyz/php-react-post-list/all-users.php")
      .catch((err) => {
        console.log("Err: ", err);
      });
  //  console.log(response.data.users);
      dispatch(setProducts(response.data));
  };
  const catfetchProducts = async () => {
   debugger;
    const response = await axios
      .get(`https://www.livenewscafe.xyz/php-react-post-list/category-wise-allusers.php?cat=${cat}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

      dispatch(setProductsCat(response.data));
     
    };

  useEffect(() => {
    fetchProducts();
    
    catfetchProducts();
 
}, []);
  
  return <>
 <div className="row">
<TechCards/>
 </div>

   </>;
};

export default Technology;
