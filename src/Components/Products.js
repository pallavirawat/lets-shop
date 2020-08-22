import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {productlist} from "../data/constants";
import './Products.scss'

function Products(props) {
    return <div className="Products" >
        {
            productlist.map((product, index) => (
                <Card className="Card" key={index}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.cost}$
                    </Card.Text>
                        <Button variant="primary">Buy Now</Button>
                    </Card.Body>
                </Card>
            )
            )
        }
    </div>;
}

Products.propTypes = {};

Products.defaultProps = {}
export default Products