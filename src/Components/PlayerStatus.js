import * as PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import './PlayerStatus.scss'
import {bootstapVariant} from "../data/constants";

function PlayerStatus(props) {
    return <div className={"PlayerStatus"}>
        <Button variant={bootstapVariant.LIGHT} className={"deathCount"}>
            No Of Tries Left <Badge variant="danger">3</Badge>
            <span className="sr-only">unread messages</span>
        </Button>

        <Button variant={bootstapVariant.LIGHT} className={"creditLimit"}>
            Credit Limit <Badge variant="success">500.00 $</Badge>
            <span className="sr-only">unread messages</span>
        </Button>
    </div>;
}

PlayerStatus.propTypes = {};

PlayerStatus.defaultProps = {}
export default PlayerStatus