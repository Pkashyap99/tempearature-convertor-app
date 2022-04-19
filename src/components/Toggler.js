import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";
import '../App.css';

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  margin-top:10px;
  margin-left:5px;
  }
`;
const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Button className="toggle-button" onClick={toggleTheme} >
          Switch Theme
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
