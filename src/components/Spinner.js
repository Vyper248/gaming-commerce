import styled from 'styled-components';

const StyledComp = styled.div`
    margin: 5px auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid #BBB;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        width: 40px;
        height: 40px;
        border-top: 5px solid black;
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

const Spinner = ({children, isLoading=false}) => {
    if (isLoading) return <StyledComp></StyledComp>;
    else return <>{children}</>;
}

export default Spinner;