import styled from 'styled-components';

const StyledComp = styled.div`
    position: relative;
    margin-bottom: 40px;
    margin-top: 40px;

    & > input {
        border: none;
        border-bottom: 1px solid gray;
        width: 100%;
        padding: 30px 20px 20px 5px;
        font-size: 1em;
    }

    & input:placeholder-shown + label {
        transition: 0.2s;
        transform: translateY(30px) scale(1);
    }

    & input:focus + label {
        transform: translateY(0px) scale(0.8);
        transition: 0.2s;
    }

    & > label {
        position: absolute;
        color: gray;
        left: 5px;
        transform: translateY(0px) scale(0.8);
        transition: 0.2s;
        pointer-events: none;
        transform-origin: left;
    }

    & > input:focus {
        outline: none;
    }
`

const Input = ({label, type, value, onChange, required}) => {
    const onChangeText = (e) => {
        let value = e.target.value;
        onChange(value, e);
    }

    return (
        <StyledComp>
            <input
                placeholder={' '}
                type={type}
                value={value}
                onChange={onChangeText}
                required={required}
            />
            <label>{label}</label>
        </StyledComp> 
    );
}

export default Input;