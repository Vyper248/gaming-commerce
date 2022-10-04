import { ButtonHTMLAttributes } from 'react';
import StyledButton from './Button.style';

type ButtonProps = {
    label: string;
    backgroundColor?: string;
    width?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({label, backgroundColor='black', ...otherProps}: ButtonProps) => {
    return (
        <StyledButton backgroundColor={backgroundColor} {...otherProps}>
            { label }
        </StyledButton>
    );
}

export default Button;