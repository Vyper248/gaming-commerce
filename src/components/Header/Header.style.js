import styled from 'styled-components';

const HeaderStyle = styled.div`
    background-color: #FFF;
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 1.2em;

    & > .headerBtn {
        padding: 10px;
        margin: 20px;
        text-decoration: none;
        color: black;
    }

    & svg {
        font-size: 1.5em;
    }

    & > div.spacer {
        flex-grow: 1;
    }

    & > .headerBtn:hover {
        color: #555;
        cursor: pointer;
    }
`

export default HeaderStyle;