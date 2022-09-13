import { IconType } from 'react-icons';
import StyledIconButton from './IconButton.style';

type IconButtonProps = {
    Icon: IconType;
    onClick: ()=>void;
}

const IconButton = ({Icon, onClick}: IconButtonProps) => {
    return (
        <StyledIconButton onClick={onClick}><Icon/></StyledIconButton>
    );
}

export default IconButton;