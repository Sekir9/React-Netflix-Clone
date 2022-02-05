import { Link as ReachRouterLink } from 'rea;ct-router-dom'
import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Error = styled.div``;

export const Base = styled.form``;

export const Title = styled.h1``;  

export const Text = styled.p``;

export const TextSmall = styled.p``;

export const Link = styled(ReachRouterLink)`
  color: white;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input``;

export const Submit = styled.button``;
