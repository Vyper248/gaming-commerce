import styled from 'styled-components';

const StyledOrderConfirmation = styled.div`
    text-align: center;

    & > table {
        margin: auto;
        margin-bottom: 20px;
        border-collapse: collapse;

        & th {
            font-weight: bold;
            height: 50px;
        }

        & th:first-child,
        & td:first-child {
            text-align: left;
        }

        & > thead > tr,
        & > tbody tr {
            border-bottom: 1px solid gray;
        }

        & > tbody td:nth-child(2) {
            padding: 10px;
            text-align: center;
        }

        & > tbody td:last-child {
            padding-right: 0px;
            text-align: right;
        }

        & > tbody > tr:last-child {
            border-bottom: none;
            font-weight: bold;
        }
    }
`

export default StyledOrderConfirmation;