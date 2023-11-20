import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 3rem auto;
  max-width:60rem;
  padding:2rem;
  background-color:${props => props.theme.component};
  border:1px solid ${props => props.theme.border};
  
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  flex:1;
 
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size:1.6rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

width:100%;  
  `;
export const InfoDiv = styled.div`
display: flex;
justify-content:space-between;
gap: 0.5rem;
`


export const ErrorMessage = styled.p`

font-size:1.2rem;
color:red;
margin-top:.5rem;
`