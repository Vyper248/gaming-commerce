import styled from 'styled-components';

const StyledQuantitySelector = styled.div`
    display: flex;
    justify-content: center;

    & > div.qty {
        margin: 0px 5px;
        padding: 5px;
    }

    & > div:first-child {
        ${props => props.qty === 1 ? 'color: #EEE;' : ''}

        :hover {
            ${props => props.qty === 1 ? 'cursor: default;' : ''}
        }
    }
`

export default StyledQuantitySelector;