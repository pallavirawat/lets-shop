import * as PropTypes from "prop-types";
import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {bootstapVariant, currencySymbol, productlist} from "../data/constants";
import './Products.scss'
import {changePlayerStatus, getRandomDecision} from "../engineDynamics/Engine";

function Products(props) {
    const [stageDecision, setStageDecision] = useState()
    const handleBuyNow = () => {
        const decision = getRandomDecision()
        console.log(decision)
        changePlayerStatus(decision,
            props.creditLimit, props.setCreditLimit,
            props.deathCount, props.setDeathCount,
            props.stage, props.setStage)
        setStageDecision(decision)
    }

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
                        <Button variant={bootstapVariant.INFO} onClick={handleBuyNow}>Buy Now</Button>
                    </Card.Body>
                </Card>
            )
            )
        }
    </div>;
}

Products.propTypes = {
    deathCount: PropTypes.number.isRequired,
    creditLimit: PropTypes.number.isRequired,
    stage: PropTypes.number.isRequired,
    setDeathCount: PropTypes.func.isRequired,
    setCreditLimit: PropTypes.func.isRequired,
    setStage: PropTypes.func.isRequired,
};

Products.defaultProps = {}
export default Products