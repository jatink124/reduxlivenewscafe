import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts,setProductsCat } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import {MainContainer} from '../Styles/ProductListing';
const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const catproducts = useSelector((state) => state.catallProducts.catproducts);

  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://www.catchmyjob.in/php-react-post-list/all-users.php")
      .catch((err) => {
        console.log("Err: ", err);
      });
  //  console.log(response.data.users);
      dispatch(setProducts(response.data.users));
  };
  const catfetchProducts = async () => {
    const response = await axios
      .get("https://www.catchmyjob.in/php-react-post-list/category-wise-allusers.php")
      .catch((err) => {
        console.log("Err: ", err);
      });

      dispatch(setProductsCat(response.data.users));
  };

  useEffect(() => {
    fetchProducts();
    catfetchProducts();
  }, []);

  console.log("Products :", catproducts);
  return (
 <MainContainer>
 <div className="ui grid container">
      <ProductComponent />
    </div>
    </MainContainer>
  );
};

export default ProductPage;
