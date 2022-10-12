import styled from 'styled-components';

const StyledSpinner = styled.div`
    margin: ${props => props.margin} auto;
    width: ${props => props.width};
    height: ${props => props.width} !important;
    border-radius: 50%;
    ${props => props.inverted ? 'border: 5px solid #444' : 'border: 5px solid #BBB'};
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        width: calc(${props => props.width} - 10px);
        height: calc(${props => props.width} - 10px);
        ${props => props.inverted ? 'border-top: 5px solid white' : 'border-top: 5px solid black'};
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-radius: 50%;
        animation: spin 0.7s linear infinite;
    }

    @keyframes spin {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`

export default StyledSpinner;