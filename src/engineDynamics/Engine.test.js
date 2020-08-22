import {changePlayerStatus, DecisionResultTypes} from "./Engine";

describe('Engine', () => {
    describe('changePlayerStatus', () => {
        it('should just increment the stage in case of PASS', () => {
            const decision = DecisionResultTypes.PASS
            const creditLimit = 500
            const deathCount = 3
            const stage = 1
            const setCreditLimit = jest.fn()
            const setDeathCount = jest.fn()
            const setStage = jest.fn()

            changePlayerStatus(decision,
                creditLimit, setCreditLimit,
                deathCount, setDeathCount,
                stage, setStage)

            expect(setStage).toHaveBeenCalledWith(2)
            expect(setCreditLimit).not.toHaveBeenCalled()
            expect(setDeathCount).not.toHaveBeenCalled()
        });

        it('should increase credit card limit in case of GIFT_CARD_WIN', () => {
            const decision = DecisionResultTypes.GIFT_CARD_WIN
            const creditLimit = 500
            const deathCount = 3
            const stage = 1
            const setCreditLimit = jest.fn()
            const setDeathCount = jest.fn()
            const setStage = jest.fn()

            changePlayerStatus(decision,
                creditLimit, setCreditLimit,
                deathCount, setDeathCount,
                stage, setStage)

            expect(setStage).toHaveBeenCalledWith(2)
            expect(setCreditLimit).toHaveBeenCalledWith(600)
            expect(setDeathCount).not.toHaveBeenCalled()
        });

        it('should decrease credit card limit and death count in case of OUT_OF_STOCK', () => {
            const decision = DecisionResultTypes.OUT_OF_STOCK
            const creditLimit = 500
            const deathCount = 3
            const stage = 1
            const setCreditLimit = jest.fn()
            const setDeathCount = jest.fn()
            const setStage = jest.fn()

            changePlayerStatus(decision,
                creditLimit, setCreditLimit,
                deathCount, setDeathCount,
                stage, setStage)

            expect(setStage).toHaveBeenCalledWith(2)
            expect(setCreditLimit).toHaveBeenCalledWith(400)
            expect(setDeathCount).toHaveBeenCalledWith(2)
        });

        it('should die in case of CC_LIMIT_EXHAUST', () => {
            const decision = DecisionResultTypes.CC_LIMIT_EXHAUST
            const creditLimit = 500
            const deathCount = 3
            const stage = 1
            const setCreditLimit = jest.fn()
            const setDeathCount = jest.fn()
            const setStage = jest.fn()

            changePlayerStatus(decision,
                creditLimit, setCreditLimit,
                deathCount, setDeathCount,
                stage, setStage)

            expect(setStage).not.toHaveBeenCalled()
            expect(setCreditLimit).toHaveBeenCalledWith(0)
            expect(setDeathCount).toHaveBeenCalledWith(0)
        });
    });

});