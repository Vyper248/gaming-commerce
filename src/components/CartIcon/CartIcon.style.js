import styled from 'styled-components';

const StyledCartIcon = styled.div`
    position: relative;

    & > svg {
        transform: scale(1.3);
    }

    & > div {
        position: absolute;
        left: 0px;
        top: 11px;
        font-size: 0.7em;
        text-align: center;
        width: 100%;
    }

    @media screen and (max-width: 370px) {
        & > div {
            top: 9px;
        }   
    }
`

export default StyledCartIcon;