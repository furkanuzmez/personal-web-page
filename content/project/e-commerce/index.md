---
title: E-commerce Web App
date: "2021-01-12T12:28:03+00:00"
description: "Django Authentication and Backend,React "
subjects: ["info","javascript","react","python","redux","store"]
---


Hi Everyone

##E-Commerce

- UI-Components
- React Settings  - Frontend
- Django API Settings - Backend


###UI-Components 

 Footer 

 ```js 
import React from 'react'
import { Container,Row,Col } from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <Container> 
                <Row> 
                    <Col className = "text-center py-3 "> Copyright &copy; Neseli Dukkan </Col>
                </Row> 
                 
            </Container>
        </footer>
    )
}

export default Footer


 ```

 Header 

 ```js 
       import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Navbar , Nav , Container , Row, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions"
import  SearchBox from './SearchBox';


function Header() {

 const userLogin =useSelector(state => state.userLogin)
 const { userInfo } = userLogin
 const dispatch = useDispatch()

 const logoutHandler = (e) => { 
    
    dispatch(logout())
}

    return (

        <header>
           <Navbar bg="light " variant= "light" expand="lg" collapseOnSelect> 
           <Container> 
                <LinkContainer to = '/'>  
                <Navbar.Brand href="/">Neseli Dukkan </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                <SearchBox/>
                <Nav className="mr-auto"> 
                <LinkContainer to='/cart'>   
                <Nav.Link> <i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                </LinkContainer>
                { userInfo ? ( 
                <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to="/profile" >  
                    <NavDropdown.Item> Profile </NavDropdown.Item> 
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}> Logout </NavDropdown.Item>
                    </NavDropdown>
                ) : ( 
                      <LinkContainer to='/login'>
                      <Nav.Link><i className="fas fa-user" > Login </i></Nav.Link>
                      </LinkContainer>
                )} 

                { userInfo && userInfo.isAdmin && (
                         <NavDropdown title='Admin' id='adminmenu'>
                         <LinkContainer to="/admin/userList/" >  
                         <NavDropdown.Item> Users </NavDropdown.Item> 
                         
                         </LinkContainer>
                         <LinkContainer to="/admin/productlist" >  
                         <NavDropdown.Item> Products </NavDropdown.Item> 
                         </LinkContainer>
                         <LinkContainer to="/admin/orderlist" >  
                         <NavDropdown.Item> Orders </NavDropdown.Item> 
                         </LinkContainer>
                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                     </NavDropdown>
 
                ) }

            </Nav>

           </Navbar.Collapse>
               
                </Container>
         
           </Navbar>
        </header>
    )
}

export default Header

 ``` 

 Loader 

 ```js 
import React from 'react'
import { Spinner } from 'react-bootstrap'
function Loader() {
    return (
        <Spinner 
         
         animation ='border'
         role= 'status' 
         style={{
           height:'100px',
           width:'100px',
           margin:'auto',
           display:'block'
         }} > 
         
         </Spinner>
    )
}

export default Loader
        
 ```
Message 

```js 
import React from 'react'
import { Alert} from 'react-bootstrap'


function Message( { variant , children}) {
    return (
       <Alert variant= {variant} > 
            {children}
       </Alert>
    )
}

export default Message
```

Product 

```js
          import React from 'react'
import { Card , Button } from 'react-bootstrap' 
import Rating from './Rating'
import { Link } from "react-router-dom";
function Product( {product}) {
    return (
       <Card className="my-3 p-3 rounded ">
                <Link to = { `/product/${product._id}`}> 
                       <Card.Img src = { product.image} />
                </Link>
        <Card.Body> 
         
        <Link to={`/product/${product._id}`} > 
         <Card.Title as="div"> 
            <strong> { product.name}</strong>

         </Card.Title>
           </Link>
           

        < Card.Text as="div"> 
            <div className=" my-3"> 
             
              { product.rating} from { product.numReviews} reviews

              <Rating value = { product.rating } text = { `${product.numReviews } reviews` } color={'#f43664'} />

            </div>
        </Card.Text>  
        < Card.Text as="h3"> 
          ${ product.price} 
        </Card.Text>
      
              
        </Card.Body>

       </Card>
    )
}

export default Product



```

Rating 

```js 
       import React from 'react'

function Rating(  { value, text ,color}) {
    return (
        <div className="rating">
           <span> 
           <i  style={{ color}}  className ={
               
               value >= 1 ? 'fas fa-star' :
               value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'
               }  >  </i>

           </span>  
           <span> 
           <i  style={{ color}}  className ={
               
               value >= 2 ? 'fas fa-star' :
               value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'
               }  >  </i>

           </span>
           <span> 
           <i  style={{ color}}  className ={
               
               value >= 3 ? 'fas fa-star' :
               value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'
               }  >  </i>

           </span>

           <span> 
           <i  style={{ color}}  className ={
               
               value >= 4 ? 'fas fa-star' :
               value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'
               }  >  </i>

           </span>
           
           <span> 
           <i  style={{ color}}  className ={
               
               value >= 5 ? 'fas fa-star' :
               value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'
               }  >  </i>

           </span>


           <span  > { text && text } </span>
        </div>
    )
}

export default Rating 
```
```js 

import React from 'react'

import { Nav } from "react-bootstrap"
import { LinkContainer} from 'react-router-bootstrap'



function CheckoutSteps({step1,step2,step3,step4}) {
    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item> 
                { step1 ? (
                <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                ): (
                    <Nav.Link disabled>Login</Nav.Link>
                ) }
                
            </Nav.Item>
            <Nav.Item> 
                { step2 ? (
                <LinkContainer to="/shipping">
                <Nav.Link>Shipping</Nav.Link>
                </LinkContainer>
                ): (
                    <Nav.Link disabled>Shipping</Nav.Link>
                ) }
                
            </Nav.Item>
            <Nav.Item> 
                { step3 ? (
                <LinkContainer to="/payment">
                <Nav.Link>Payment</Nav.Link>
                </LinkContainer>
                ): (
                    <Nav.Link disabled>Payment</Nav.Link>
                ) }
                
            </Nav.Item>

            <Nav.Item> 
                { step4 ? (
                <LinkContainer to="/placeorder">
                <Nav.Link>Place Order</Nav.Link>
                </LinkContainer>
                ): (
                    <Nav.Link disabled>Place Order</Nav.Link>
                ) }
                
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps

```

###React Settings




