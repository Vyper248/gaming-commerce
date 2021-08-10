import styled from 'styled-components';

const StyledComp = styled.h1`
    text-align: center;
    background-color: #DDD6;
    margin: 0px;
    margin-bottom: 30px;
    padding: 10px;
`

const Heading = ({heading}) => {
    return (
        <StyledComp>{heading}</StyledComp>
    );
}

export default Heading;