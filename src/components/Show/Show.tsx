import { ReactNode } from "react";

type ShowProps = {
    when: boolean;
    children?: ReactNode
}

const Show = ({when, children}: ShowProps) => {
    if (when) return <>{children}</>;
    else return null;
}

export default Show;