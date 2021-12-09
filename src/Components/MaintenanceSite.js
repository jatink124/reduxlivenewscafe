import React from "react";
import { Navbar, Nav, Container,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import styled from "styled-components";
const Wrapper = styled.div`
body {
    text-align: center;
    padding: 20px;
  }

  @media (min-width: 768px) {
    body {
      padding-top: 150px;
    }
  }

  h1 {
    font-size: 50px;
  }

  body {
    font: 20px Helvetica, sans-serif;
    color: #333;
  }

  article {
    display: block;
    text-align: left;
    max-width: 650px;
    margin: 0 auto;
  }
`;
const MaintenanceSite = () => {
return (
    <>
<Wrapper>
<article>
  <h1>We&rsquo;ll be back soon!</h1>
  <div>
    <p>
      Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment.We&rsquo;ll be back online
      shortly!
    </p>
    <p>&mdash; The LiveNewscafe Team</p>
  </div>
</article>
</Wrapper>
    </>
);

}

export default MaintenanceSite;