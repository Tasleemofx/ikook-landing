import { styled } from "styled-components"


export const Message = styled.div`
position: fixed;
text-align: center;
top: 0;
left: 10%;
width: 80%;
height: 3.5em;
font-size: 1em;
font-weight: 600;
background: rgba(252, 192, 28);
padding: 0.7em;
border-radius: 0 0 10px 10px;
z-index: 20;
color: ${props => props.messagetype === "success"? "green": "red"} ;

`