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
`

export default StyledCartIcon;