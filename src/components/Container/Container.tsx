import { PropsWithChildren } from 'react';

import StyledContainer from './Container.style';

const Container = ({children}: PropsWithChildren<{}>) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}

export default Container;