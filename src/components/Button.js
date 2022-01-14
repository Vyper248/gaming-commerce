import styled from 'styled-components';

const StyledComp = styled.button`
    border: 1px solid ${props => props.backgroundColor};
    color: white;
    background-color: ${props => props.backgroundColor};
    display: inline-block;
    padding: 20px;
    text-align: center;
    min-width: 140px;
    text-transform: uppercase;
    font-size: 1em;
    margin: 5px;

    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }
`

const Button = ({label, backgroundColor='black', ...otherProps}) => {
    return (
        <StyledComp backgroundColor={backgroundColor} {...otherProps}>
            { label }
        </StyledComp>
    );
}

export default Button;