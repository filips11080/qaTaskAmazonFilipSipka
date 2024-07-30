export const priceRegex = (price: string): number => {

    const formatedPrice = Number(price.replace(/\$/g, ""));
    return formatedPrice
}