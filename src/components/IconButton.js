import styled from 'styled-components';

const StyledComp = styled.div`
    padding: 5px;

    &:hover {
        cursor: pointer;
        color: gray;
    }
`

const IconButton = ({Icon, onClick}) => {
    return (
        <StyledComp onClick={onClick}><Icon/></StyledComp>
    );
}

export default IconButton;