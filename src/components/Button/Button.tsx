import { ButtonHTMLAttributes } from 'react';
import StyledButton from './Button.style';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.style'

type ButtonProps = {
    label: string;
    backgroundColor?: string;
    width?: string;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({label, backgroundColor='black', isLoading=false, ...otherProps}: ButtonProps) => {
    return (
        <StyledButton backgroundColor={backgroundColor} isLoading={isLoading} {...otherProps}>
            { isLoading ? <LoadingSpinner/> : label }
        </StyledButton>
    );
}

export default Button;