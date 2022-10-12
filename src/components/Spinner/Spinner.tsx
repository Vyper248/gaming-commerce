import { ReactNode } from "react";
import StyledSpinner from "./Spinner.style";

type SpinnerProps = {
    children?: ReactNode;
    isLoading: boolean;
    width?: string;
    margin?: string;
    inverted?: boolean;
}

const Spinner = ({children, isLoading=false, width='50px', margin='5px', inverted=false}: SpinnerProps) => {
    if (isLoading) return <StyledSpinner width={width} margin={margin} inverted={inverted}></StyledSpinner>;
    else return <>{children}</>;
}

export default Spinner;