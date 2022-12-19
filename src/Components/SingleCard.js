import Card from "react-bootstrap/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const SingleCard = ({arr}) => {
  return <>
    <div class="row">
      {arr.map((product) => {
   const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl,PostPosition } = product;
  var newsdet= PostDetails.split(".");
   return (
          <div class="col">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{CategoryName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                 {PostTitle}
                </Card.Subtitle>
                {/* <Card.Text>
               {newsdet[0]}
                </Card.Text> */}
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>{" "}
  </>;
}

export default SingleCard;
