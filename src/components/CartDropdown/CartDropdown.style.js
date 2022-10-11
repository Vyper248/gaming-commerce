import styled from 'styled-components';

const StyledCartDropdown = styled.div`
    position: absolute;
    right: 30px;
    top: 90px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    background-color: white;
    width: 300px;
    height: 400px;
    z-index: 2;
    padding: 20px;

    & div#cartItems {
        width: calc(100% - 10px);
        margin: 5px;
        flex-grow: 1;
        overflow: scroll;

        > div {
            height: 100px;
        }
    }

    & div.empty {
        text-align: center;
    }
`

export default StyledCartDropdown;