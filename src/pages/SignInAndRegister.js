import styled from 'styled-components';

import SignInForm from '../components/SignInForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const StyledComp = styled.div`
    display: flex;
    justify-content: center;
`

const SignInAndRegister = () => {
    return (
        <StyledComp>
            <SignInForm/>
            <RegisterForm/>
        </StyledComp>
    );
}

export default SignInAndRegister;