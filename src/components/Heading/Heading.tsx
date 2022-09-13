import StyledHeading from './Heading.style';

type HeadingProps = {
    heading: string;
}

const Heading = ({heading}: HeadingProps) => {
    return (
        <StyledHeading>{heading}</StyledHeading>
    );
}

export default Heading;