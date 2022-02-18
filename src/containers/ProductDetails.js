import React, { useEffect } from "react";
import axios from "axios";
import { Card,Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const {id}  = useParams();
 const WorldStyles=styled.div`
 .card-text{
  font-size: 19px;
  text-overflow: ellipsis;
  white-space: inherit;
  overflow: hidden;
  width: 900px;
  
  line-height: 40px;
}
 `
  
  const idd=5;
  let product = useSelector((state) => state.product);
  
 
  const { CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://www.livenewscafe.com/php-react-post-list/getidallusers.php/?id=`+`${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
   
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
  <WorldStyles>
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
      // <div className="container">
      //   <div className="row">
      //     <div className="col">{CategoryName}</div>
      //   <div className="col">{subCategoryName}</div>
      //   <div className="col">{PostTilte}</div>
      //   <div className="col"><img className="ui fluid image" src={PostUrl} /></div>
      //   </div>
      // </div>
      <Card className="mb-5">
  <Card.Header as="h5">{PostTitle}</Card.Header>
  <Card.Body>
    <Card.Title>{PostTitle}</Card.Title>
    <Card.Text>
    {PostDetails}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      )}
    </div>
    </WorldStyles>
  );
};

export default ProductDetails;
