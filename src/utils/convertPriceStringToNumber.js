export default function convertPriceStringToNumber(price) {
    return Number(price.replace(/[^0-9\.]+/g,""));
}