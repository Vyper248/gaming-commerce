import styled from 'styled-components';

const StyledButton = styled.button`
    border: 1px solid ${props => props.backgroundColor};
    color: white;
    background-color: ${props => props.backgroundColor};
    display: inline-block;
    text-align: center;
    width: ${props => props.width ? props.width : 'auto'};
    min-width: 140px;
    text-transform: uppercase;
    font-size: 1em;
    margin: 5px;
    padding: 0px 20px;
    min-height: 61px;

    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }
`

export default StyledButton;