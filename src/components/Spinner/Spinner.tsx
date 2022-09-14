import { ReactNode } from "react";
import StyledSpinner from "./Spinner.style";

type SpinnerProps = {
    children?: ReactNode;
    isLoading: boolean;
}

const Spinner = ({children, isLoading=false}: SpinnerProps) => {
    if (isLoading) return <StyledSpinner></StyledSpinner>;
    else return <>{children}</>;
}

export default Spinner;