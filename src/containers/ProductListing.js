import React, { useEffect, useCallback, useMemo ,Suspense} from "react";
import axios from "axios";
import {useQuery} from 'react-query'
import { useDispatch, useSelector } from "react-redux";
import { setProducts,setProductsCat } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import {MainContainer} from '../Styles/ProductListing';
import Footer from "../Components/Footer/Footer";
const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const catproducts = useSelector((state) => state.catallProducts.catproducts);
 
  const dispatch = useDispatch();
 
  // const Fetch = async () => {
  //   const response = await axios
  //   .get("https://www.livenewscafe.xyz/php-react-post-list/all-users.php")
  //   .catch((err) => {
  //     console.log("Err: ", err);
  //   });
   
  //   dispatch(setProducts(response.data));
  // };

  // const catfetchProducts = async () => {
   
  //   const response = await axios
  //     .get("https://www.livenewscafe.xyz/php-react-post-list/category-wise-allusers.php")
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });

  //     dispatch(setProductsCat(response.data));
  // };

  useEffect(() => {
    // Fetch();
    // catfetchProducts();
  }, []);
  // const {isLoading,data} = useQuery('usernews',() => {
  //   return axios.get('https://www.livenewscafe.xyz/php-react-post-list/all-users.php')
    
  // })
  // if(isLoading){
  //   return <h2>Loading...</h2>
  // }
   
  // dispatch(setProducts(data.data));
  console.log("Products :", products);
  console.log("Products :", catproducts);
  return (
 <>
 <MainContainer>
 <div className="ui grid container">
      <ProductComponent />
    </div>
    </MainContainer>
<Footer/>
</>
);
};

export default ProductListing;
