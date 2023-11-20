import styled from 'styled-components';

export const FormContainer = styled.div`
width: 40rem;
  margin: 0 auto;
  background-color:${props => props.theme.component};
  
  margin-bottom:5rem;
  padding:2rem;
  margin-top:5rem;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 1rem;
  font-size:2rem;

`;

export const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1.2rem;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: .5rem;
  margin-bottom: .5rem;
  font-size:1.6rem;
`;

export const SubmitButton = styled.button`
  background-color:${props => props.theme.otherText};
  color: white;
  padding: 1rem;
  border: none;
   cursor:${props => props.cursor === "disabled" ? " not-allowed" : "pointer"};
`;
