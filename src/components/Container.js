import styled from 'styled-components';

const StyledComp = styled.div`
    max-width: 1460px;
    margin: auto;
    padding: 0px 30px;
`

const Container = ({children}) => {
    return (
        <StyledComp>
            {children}
        </StyledComp>
    );
}

export default Container;