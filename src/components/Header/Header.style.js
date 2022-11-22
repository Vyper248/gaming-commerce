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

    @media screen and (max-width: 550px) {
        & > .headerBtn {
            margin: 10px;
            padding: 5px;
            font-size: 1em;
        }   
    }

    @media screen and (max-width: 400px) {
        & > .headerBtn {
            margin: 10px;
            padding: 5px;
            font-size: 0.9em;
        }   
    }

    @media screen and (max-width: 370px) {
        & > .headerBtn {
            margin: 10px;
            padding: 5px;
            font-size: 0.8em;
        }   
    }
`

export default HeaderStyle;