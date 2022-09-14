import StyledSignInAndRegister from './SignInAndRegister.style';

import SignInForm from '../../components/SignInForm/SignInForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const SignInAndRegister = () => {
    return (
        <StyledSignInAndRegister>
            <SignInForm/>
            <RegisterForm/>
        </StyledSignInAndRegister>
    );
}

export default SignInAndRegister;