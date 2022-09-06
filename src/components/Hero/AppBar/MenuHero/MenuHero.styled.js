import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
  background-color: gold;
  border-radius: 10px;

  display: flex;
  justify-content: center;
`;

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

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Item = styled.li`
  a {
    color: black;
    :hover,
    :focus {
      color: white;
    }
  }
`;

export const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  div .show {
    background-color: rgba(175, 238, 238, 0.9);
  }
  gap: 5px;
  #dropdown {
    color: black;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    :hover,
    :focus,
    :active {
      color: white;
      box-shadow: none;
    }
    ::after {
      display: none;
    }
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
