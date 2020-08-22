import * as PropTypes from "prop-types";
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function StageResult(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.onProceed} >
                <Modal.Header closeButton>
                    <Modal.Title>Ummm, something happened</Modal.Title>
                </Modal.Header>
                <Modal.Body>You got {props.decision}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleRestart}>
                        Restart
                    </Button>
                    <Button variant="primary" onClick={props.onProceed}>
                        Next Stage Pls
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

StageResult.propTypes = {
    decision: PropTypes.string,
    show: PropTypes.bool,
    setShow: PropTypes.func,
    onProceed: PropTypes.func,
    handleRestart: PropTypes.func
};

StageResult.defaultProps = {}
export default StageResult