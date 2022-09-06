import styled from 'styled-components';

export const Styles = styled.div`
  display: flex;
  align-items: center;
  .dropdown-toggle {
    background-color: transparent;
    border: none;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Text = styled.p`
  color: black;
`;

export const Item = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;
