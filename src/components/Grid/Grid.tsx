import { PropsWithChildren } from 'react';
import StyledGrid from './Grid.style';

const Grid = ({children}: PropsWithChildren<{}>) => {
    return (
        <StyledGrid>{children}</StyledGrid>
    );
}

export default Grid;