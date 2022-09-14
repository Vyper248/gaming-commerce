import styled from 'styled-components';

const StyledBasket = styled.div`
    width: 780px;
    margin: auto;
    margin-bottom: 30px;

    & > table {
        margin: auto;
        border-collapse: collapse;

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

    & > .totalCost {
        text-align: right;
        padding: 20px 0px;
        font-size: 2em;
    }

    & > #stripeDetails {
        color: Red;
        margin-bottom: 10px;
        text-align: right;
    }
`

export const StyledImage = styled.div`
    background-image: url('${props => props.imageURL}');
    background-size: cover;
    background-position: center;
    filter: brightness(0.96);
    width: 100%;
    height: 180px;
    margin: 10px 10px 10px 0px;
`;

export default StyledBasket;