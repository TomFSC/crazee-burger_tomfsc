import styled from "styled-components"

function Input({ value, type, placeholder, onChange }) {
   return (
      <InputStyled
         value={value}
         type={type}
         placeholder={placeholder}
         onChange={onChange}
      />
   )
}

const InputStyled = styled.input`
   width: 80%;
`
export default Input
