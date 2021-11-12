import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
const ProductComponent = () => {
 console.log(useSelector((state) => state));
  const products = useSelector((state) => state.allProducts.products);
  
  const renderList = products.filter(products=>products.id%2==0&products.PostList!="").map((product) => {
  
    const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl } = product;
    return (
     
     <div class="card">
      <img
        src={PostUrl}
        class="card-img-top"
        alt="..."
        style={{ width: '18rem',height:'18rem' }}
     />
     {id}
      <div class="card-body">
        <h5 class="card-title">{PostTitle}</h5>
        <p class="card-text">
        {CategoryName}
        </p>
      </div>
     </div>
);
});     
const renderListt = products.filter(products=>products.id%2!=0 &products.PostList!="").map((product) => {
  
  const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl } = product;
  return (
   
   <div class="card">
    <img
      src={PostUrl}
      class="card-img-top"
      alt="..."
      style={{ width: '18rem',height:'18rem' }}
   />
   {id}
    <div class="card-body">
      <h5 class="card-title">{PostTitle}</h5>
      <p class="card-text">
      {CategoryName}
      </p>
    </div>
   </div>
);
});  

const renderListtright = products.filter(person=>person.PostList=="").map((product) => {
  
  const { id, CategoryName,subCategoryName,PostTitle,PostDetails,PostUrl } = product;
  var ty = PostTitle.split(".");
  return (
   <>
  <div class="card">
   <img class="card-img-top" src={PostUrl} alt="Card image cap"  style={{ width: '18rem',height:'18rem' }}></img>
  <div class="card-body">
    <h5 class="card-title">{CategoryName}</h5>
    {/* <p class="card-text">{PostList}</p> */}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{ty[0]}</li>
    <li class="list-group-item">{ty[1]}</li>
    <li class="list-group-item">{ty[2]}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</>
);
}); 
  return <>
 <div className="row">
   <div className="col">
   {renderList}
   </div>
   <div className="col">
   {renderListt}
     </div>
     <div className="col">
     {renderListtright}
     </div>
 </div>

   


</>;
};
  
export default ProductComponent;
