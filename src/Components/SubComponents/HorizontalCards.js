import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
import { useQuery } from "react-query";
const Wrapper = styled.div`
  .imgsmall {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const HorizontalCards = ({ arr }) => {
 return (
    <>
      <div class="row">
        {arr.map((product) => {
          const {
            id,
            CategoryName,
            subCategoryName,
            PostTitle,
            PostDetails,
            PostUrl,
            PostPosition,
          } = product;

          return (
            <div class="col-sm-4">
              <div class="card">
                <Wrapper>
                  <div class="card-horizontal">
                    <div class="img-square-wrapper">
                      <LazyLoadImage
                        className="imgsmall"
                        src={PostUrl} // use normal <img> attributes as props
                        effect="blur"
                      />
                    </div>

                    <div class="card-body">
                      <h4 class="card-title">{CategoryName}</h4>
                      <Link to={`/news/${id}`}>
                        <p class="card-text">{PostTitle}</p>
                      </Link>
                    </div>
                  </div>
                </Wrapper>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HorizontalCards;
