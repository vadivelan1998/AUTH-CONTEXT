import styled from "styled-components";
import axios from "axios";
const Navbar = styled.div`
  border: ${(props) => {
    return props.border;
  }};
  width: ${(props) => {
    return props.width;
  }};
  height: ${(props) => {
    return props.height;
  }};
  margin-top: 20px;
  background-color: yellow;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content:end
`;


export { Navbar };
