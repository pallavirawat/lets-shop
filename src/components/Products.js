import * as PropTypes from "prop-types";
import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {bootstapVariant, currencySymbol, productlist} from "../data/constants";
import './Products.scss'
import {changePlayerStatus, getRandomDecision, restartShopping} from "../engineDynamics/Engine";
import StageResult from "./StageResult";

function Products(props) {
    const [stageDecision, setStageDecision] = useState()
    const [resultShow, setResultShow] = useState(false);

    const handleBuyNow = () => {
        const decision = getRandomDecision()
        console.log(decision)
        setStageDecision(decision)
        setResultShow(true)
    }

    return <div>
        <div className="Products">
            {
                productlist.map((product, idx) => (
                        <Card className="Card" key={idx} bg={bootstapVariant.WARNING} border={bootstapVariant.LIGHT}>
                            <Card.Img variant="top" src={product.image}/>
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

        </div>
        ;
        <StageResult decision={stageDecision} show={resultShow} setShow={setResultShow}
                     onProceed={() => {
                         changePlayerStatus(stageDecision,
                             props.creditLimit, props.setCreditLimit,
                             props.deathCount, props.setDeathCount,
                             props.stage, props.setStage)
                         setResultShow(false)
                     }}
                     handleRestart={() => {
                         restartShopping(props.setCreditLimit, props.setDeathCount, props.setStage)
                         setResultShow(false)
                     }}
        />
    </div>
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