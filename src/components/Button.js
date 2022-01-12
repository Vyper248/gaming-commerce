import styled from 'styled-components';

const StyledComp = styled.button`
    border: 1px solid ${props => props.backgroundColor};
    color: white;
    background-color: ${props => props.backgroundColor};
    display: inline-block;
    padding: 20px;
    text-align: center;
    width: 200px;
    text-transform: uppercase;
    font-size: 1em;

    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }
`

const Button = ({label, type='button', backgroundColor='black', onClick}) => {
    return (
        <StyledComp onClick={onClick} type={type} backgroundColor={backgroundColor}>
            { label }
        </StyledComp>
    );
}

export default Button;