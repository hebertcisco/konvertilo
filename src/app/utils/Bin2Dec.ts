import { allYour } from 'mathbases'

function ConvertToBinaryMathBases(inputDec: number) {
    return allYour("binary").areBelongTo("decimal")(inputDec)
}
export default ConvertToBinaryMathBases;