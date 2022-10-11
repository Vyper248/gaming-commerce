import styled from 'styled-components';

const StyledShopItem = styled.div`
    width: 100%;
    position: relative;

    & div.itemImage {
        // border: 1px solid red;
        position: relative;
        width: 100%;
        padding-top: 100%;
        background-image: url('${props => props.imageURL}');
        background-size: cover;
        background-position: center;
        filter: brightness(0.96);
    }

    & div.hover {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: #0000;
        opacity: 0;
        transition: 0.3s;
    }
    
    & div.addCart {
        padding: 10px;
        color: black;
        background-color: #FFFC;
        text-align: center;
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
        font-variant: small-caps;
    }

    & div.addCart:hover {
        cursor: pointer;
        background-color: #FFFF;
    }
    
    & div.itemImage:hover div.hover {
        background-color: #0006;
        opacity: 1;
        transition: 0.3s;
    }

    & div.itemName {
        text-align: left;
    }

    & div.itemPrice {
        text-align: right;
    }

    & div.itemFooter {
        display: grid;
        grid-template-columns: auto 60px;
    }

    & div.itemFooter > div {
        // border: 1px solid red;
        padding: 5px;
        font-variant: small-caps;
    }

    & div.itemName:hover {
        cursor: pointer;
    }
`

export default StyledShopItem;