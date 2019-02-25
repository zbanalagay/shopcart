export default function convertPriceStringToNumber(price) {
    // eslint-disable-next-line
    return Number(price.replace( /[^0-9\.]+/g ,""));
}