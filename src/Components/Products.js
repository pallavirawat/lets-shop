import * as PropTypes from "prop-types";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {bootstapVariant, currencySymbol, productlist} from "../data/constants";
import './Products.scss'

function Products(props) {
    return <div className="Products" >
        {
            productlist.map((product, idx) => (
                <Card className="Card" key={idx} bg={bootstapVariant.WARNING} border={bootstapVariant.LIGHT}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {`${product.cost} ${currencySymbol}`}
                    </Card.Text>
                        <Button variant={bootstapVariant.INFO}>Buy Now</Button>
                    </Card.Body>
                </Card>
            )
            )
        }
    </div>;
}

Products.propTypes = {
    deathCount: PropTypes.number.isRequired
};

Products.defaultProps = {}
export default Products