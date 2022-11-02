export const checkIfFirstNameIsValid = (firstName) => {
   //FirstName Regex
   const isValidFirstName = /^[a-zA-Z-\s]{1,50}$/
   if (!isValidFirstName.test(firstName)) {
      alert("Prénom invalide !")
      return false
   }
   return true
}
