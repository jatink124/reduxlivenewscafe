import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const {id}  = useParams();
 
  console.log({id});
  const idd=5;
  let product = useSelector((state) => state.product);
  console.log({ id });
 
  const { CategoryName,subCategoryName,PostTilte,PostUrl } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://www.catchmyjob.in/php-react-post-list/getidallusers.php/?id=`+`${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
   debugger;
      dispatch(selectedProduct(response.data.users[0]));
  console.log(response.data.users);
  };

  useEffect(() => {
    if (id && id !== "") fetchProductDetail(id);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        // <div className="ui placeholder segment">
        //   <div className="ui two column stackable center aligned grid">
        //     <div className="ui vertical divider">AND</div>
        //     <div className="middle aligned row">
        //       <div className="column lp">
        //         {/* <img className="ui fluid image" src={image} /> */}
        //       </div>
        //       <div className="column rp">
        //         {/* <h1>{title}</h1> */}
        //         <h2>
        //           <a>{CategoryName}</a>
        //         </h2>
        //         <h3>{subCategoryName}</h3>
        //         <p>{PostTilte}</p>
        //      </div>
        //     </div>
        //   </div>
        // </div>
      <div className="container">
        <div className="row">
          <div className="col">{CategoryName}</div>
        <div className="col">{subCategoryName}</div>
        <div className="col">{PostTilte}</div>
        <div className="col"><img className="ui fluid image" src={PostUrl} /></div>
        </div>
      </div>
      )}
    </div>
  );
};

export default ProductDetails;
