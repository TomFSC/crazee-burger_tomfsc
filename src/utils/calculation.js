//Calcul rounded price
export const roundedPrice = (price) => {
   let res = Math.floor(price * 10) / 10
   return res.toFixed(2)
}
