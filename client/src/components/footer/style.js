import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.background};

  padding: 20px;
  color: white;
  text-align: center;
  border-top:1px solid ${props => props.theme.border};
  border-bottom:1px solid ${props => props.theme.border};

`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;
