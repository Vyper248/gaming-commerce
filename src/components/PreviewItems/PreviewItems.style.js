import styled from 'styled-components';

const StyledPreviewItems = styled.div`
    & > h1 {
        font-variant: small-caps;
        width: max-content;

        &:hover {
            cursor: pointer;
            color: #555;
        }
    }
`

export default StyledPreviewItems;