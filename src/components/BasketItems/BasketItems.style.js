import styled from 'styled-components';

const StyledDropdownItems = styled.div`
    width: calc(100% - 10px);
    margin: 5px;
    flex-grow: 1;
    overflow: scroll;

    & > div {
        height: 100px;
    }

    div.empty {
        text-align: center;
    }
`

export const StyledBasket = styled.div`
    & table {
        margin: auto;
        border-collapse: collapse;
        width: 100%;
        position: relative;

        & tr {
            position: relative;
        }

        & th {
            width: 190px;
            font-weight: bold;
            height: 50px;
        }

        & th:first-child {
            width: 150px;
            text-align: left;
        }

        & th:last-child {
            width: 60px;
        }

        & > thead > tr {
            border-bottom: 1px solid gray;
        }

        & > tbody td:not(:first-child) {
            padding: 10px;
            text-align: center;
        }

        & > tbody tr {
            border-bottom: 1px solid gray;
        }
    }

    & .totalCost {
        text-align: right;
        padding: 20px 0px;
        font-size: 2em;
    }

    & tr.deleting::after {
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        background-color: gray;
        opacity: 0.5;
    }

    & td.deleting {
        width: 0px;
        padding: 0px !important;

        position: absolute;
        top: calc(50% - 30px);
        left: calc(50% - 25px);
    }
`;

export const StyledImage = styled.div`
    background-image: url('${props => props.imageURL}');
    background-size: cover;
    background-position: center;
    filter: brightness(0.96);
    width: 100%;
    height: 180px;
    margin: 10px 10px 10px 0px;
`;

export default StyledDropdownItems;