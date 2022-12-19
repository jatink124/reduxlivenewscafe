import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useQuery} from 'react-query'
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import Footer from "../Footer";
import SingleCard from "../Components/SingleCard";
import FooterList from "../Components/FooterList";
const ProductDetails = () => {
  const { id } = useParams();

  const WorldStyles = styled.div`
    @media only screen and (min-width: 768px) {
      .card-text {
        font-size: 19px;
        text-overflow: ellipsis;
        white-space: inherit;
        overflow: hidden;
        width: 900px;
        line-height: 40px;
      }
      .imgsmall {
        width: 900px;
        height: 300px;
      }
    }
    @media only screen and (max-width: 768px) {
      .card-text {
        font-size: 15px;
        text-overflow: ellipsis;
        white-space: inherit;
        overflow: hidden;
        width: 300px;
        line-height: 40px;
      }
      .imgsmall {
        width: 300px;
        height: 100px;
      }
    }
  `;

  const idd = 5;
  let product = useSelector((state) => state.product);

  const {
    CategoryName,
    subCategoryName,
    PostTitle,
    PostDetails,
    PostUrl,
    PostList,
  } = product;

  const [Postd, setPostd] = useState("");
  const [Postdl, setPostl] = useState("");

  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(
        `https://www.livenewscafe.xyz/php-react-post-list/getidallusers.php/?id=` +
          `${id}`
      )
      .catch((err) => {
        console.log("Err: ", err);
      });
    
      
    dispatch(selectedProduct(response.data.users[0]));
    
    var tyy = response.data.users[0].PostDetails.split(".");
    var ty = response.data.users[0].PostList.split(".");
    setPostd(tyy);
    setPostl(ty);
 
  };
 
  useEffect(() => {
    if (id && id !== "") fetchProductDetail(id);
    return () => {
      dispatch(removeSelectedProduct());
    };
   
  }, [id]);
  const fsh = () => {
    return axios.get('https://www.livenewscafe.xyz/php-react-post-list/category-wise-allusers.php')
  }
  const {isLoading,data,isFetching} = useQuery('usernews',fsh,{staleTime:30000})
 
  if(isLoading){
    return <h2>Loading...</h2>
  }
  var singlecard=data.data.filter(products=>products.id%2==0).map((p)=>p);
debugger;
  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div> ...Loading </div>
      ) : (
        <Container fluid>
          <Row>
            <Col md={9}>
              <WorldStyles>
                <div className="ui grid container">
                  <Card className="mb-7">
                    <LazyLoadImage
                      className="imgsmall"
                      src={PostUrl} // use normal <img> attributes as props
                      effect="blur"
                    />
                    <Card.Header as="h5"> {PostTitle} </Card.Header>{" "}
                    <Card.Body>
                      {PostList != 1 ? (
                        <Card.Text>
                          <ul>
                            {" "}
                            {/* {Postdl.map((car)=><li>{car}</li>)} */}{" "}
                            <li> {Postdl[0]} </li>
                            <li>{Postdl[1]}</li> <li> {Postdl[2]} </li>{" "}
                          </ul>{" "}
                        </Card.Text>
                      ) : (
                        <div></div>
                      )}{" "}
                      <Card.Text>
                        {" "}
                        {Postd[0]} {Postd[1]} <br /> {Postd[2]} <br /> <br />{" "}
                        {Postd[3]} {Postd[4]} <br /> <br /> {Postd[5]}{" "}
                        {Postd[6]}{" "}
                      </Card.Text>
                    </Card.Body>{" "}
                  </Card>
                </div>{" "}
              </WorldStyles>{" "}
            </Col>{" "}
            <Col className="d-none d-sm-block">
           <Container><Row>
            <Col><SingleCard arr={singlecard} /></Col></Row>
            </Container></Col>
          </Row>{" "}
        </Container>
      )}
<FooterList/>
      <Footer/>
    </>
  );
};

export default ProductDetails;
