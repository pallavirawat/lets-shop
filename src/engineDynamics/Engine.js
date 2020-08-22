import {initialCreditLimit, initialDeathCount, initialStage} from "./configuration";

export const DecisionResultTypes = {
    PASS: "PASS",
    GIFT_CARD_WIN: "GIFT_CARD_WIN",
    OUT_OF_STOCK: "OUT_OF_STOCK",
    CC_LIMIT_EXHAUST: "CC_LIMIT_EXHAUST"
}

export function getRandomDecision() {
    const keys = Object.keys(DecisionResultTypes);
    return DecisionResultTypes[keys[keys.length * Math.random() << 0]];
}

export function changePlayerStatus(decision,
                                   creditLimit, setCreditLimit,
                                   deathCount, setDeathCount,
                                   stage, setStage) {
    switch (decision){
        case DecisionResultTypes.PASS:
            setStage(stage+1)
            break;
        case DecisionResultTypes.GIFT_CARD_WIN:
            setStage(stage+1)
            setCreditLimit(creditLimit + 100)
            break;
        case DecisionResultTypes.OUT_OF_STOCK:
            setStage(stage+1)
            setDeathCount(deathCount-1)
            setCreditLimit(creditLimit-100)
            break;
        case DecisionResultTypes.CC_LIMIT_EXHAUST:
            setDeathCount(0)
            setCreditLimit(0)
            break;
    }
}

export function restartShopping(setCreditLimit, setDeathCount, setStage){
    setCreditLimit(initialCreditLimit)
    setDeathCount(initialDeathCount)
    setStage(initialStage)
}
