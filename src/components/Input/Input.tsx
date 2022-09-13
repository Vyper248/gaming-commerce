import React from 'react';
import StyledInput from './Input.style';

type InputProps = {
    label: string;
    type: string;
    value: string;
    required?: boolean;
    onChange: (value:string, e:React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input = ({label, onChange, ...otherProps}: InputProps) => {
    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        onChange(value, e);
    }

    return (
        <StyledInput>
            <input
                placeholder={' '}
                onChange={onChangeText}
                {...otherProps}
            />
            <label>{label}</label>
        </StyledInput> 
    );
}

export default Input;