import { ButtonHTMLAttributes } from 'react';
import StyledButton from './Button.style';

import Spinner from '../Spinner/Spinner';

type ButtonProps = {
    label: string;
    backgroundColor?: string;
    width?: string;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({label, backgroundColor='black', isLoading=false, ...otherProps}: ButtonProps) => {
    return (
        <StyledButton backgroundColor={backgroundColor} isLoading={isLoading} {...otherProps}>
            { isLoading ? <Spinner isLoading={true} width='40px' margin='0px'></Spinner> : label }
        </StyledButton>
    );
}

export default Button;