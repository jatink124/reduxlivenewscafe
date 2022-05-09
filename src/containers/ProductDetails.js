import React, { useEffect,useState } from "react";
import axios from "axios";
import { Card,Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from "styled-components";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const {id}  = useParams();
 
  const WorldStyles=styled.div`
  @media only screen and (min-width: 768px) {
  .card-text{
  font-size: 19px;
  text-overflow: ellipsis;
  white-space: inherit;
  overflow: hidden;
  width: 900px;
  line-height: 40px;
}
.imgsmall{
  width:900px;
  height:300px;
}
.ui.grid.container{
  width:950px !important;
}
}
@media only screen and (max-width: 768px) {
  .card-text{
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: inherit;
  overflow: hidden;
  width: 300px;
  line-height: 40px;
}
.imgsmall{
  width:300px;
  height:100px;
}
}
`
  
  const idd=5;
  let product = useSelector((state) => state.product);
  
 
  const { CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl,PostList } = product;


 const [Postd,setPostd]=useState('');
 const [Postdl,setPostl]=useState('');
  
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://www.livenewscafe.xyz/php-react-post-list/getidallusers.php/?id=`+`${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
     
      dispatch(selectedProduct(response.data.users[0]));
  
      var tyy=response.data.users[0].PostDetails.split(".");
      var ty=response.data.users[0].PostList.split(".");

   setPostd(tyy);
   setPostl(ty);

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
   <div className="container">
     <div className="row">
       <div className="col">
      <Card className="mb-3">

     <LazyLoadImage
 className="imgsmall"
      src={PostUrl} // use normal <img> attributes as props
      effect="blur"
  />
  <Card.Header as="h5">{PostTitle}</Card.Header>
  <Card.Body>
    {/* <Card.Title>{PostTitle}</Card.Title> */}
   <Card.Text>
   <ul>
        {/* {Postdl.map((car)=><li>{car}</li>)} */}
        <li>{Postdl[0]}</li><li>{Postdl[1]}</li><li>{Postdl[2]}</li>
      </ul>
   </Card.Text>
    <Card.Text>
    {Postd[0]}{Postd[1]}<br/>{Postd[2]}<br/><br/>{Postd[3]}{Postd[4]}<br/><br/>{Postd[5]}{Postd[6]}
    </Card.Text>

  </Card.Body>
</Card></div></div></div>
      )}
    </div>
    </WorldStyles>
  );
};

export default ProductDetails;
