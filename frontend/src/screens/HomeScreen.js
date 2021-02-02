import React from 'react'
import {Col, Row } from 'react-bootstrap'
import Products from '../products.js'
import Product from '../components/Product.js'


const HomeScreen = () => {
    return (
        <>
        <Row>
         
            {Products.map(product =>(
            <Col key={product._id}sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>

            ))}
        </Row>
        </>
    )
}

export default HomeScreen
