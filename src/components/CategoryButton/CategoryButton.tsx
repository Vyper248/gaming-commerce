import { useHistory, useLocation } from "react-router";

import StyledCategoryButton from "./CategoryButton.style";

interface CategoryButtonProps {
    title: string;
    imageURL: string;
}

const CategoryButton = ({title='', imageURL=''}: CategoryButtonProps) => {
    const history = useHistory();
    const location = useLocation();

    const onClick = () => {
        history.push(`Shop${location.pathname}${title}`);
    }

    return (
        <StyledCategoryButton imageURL={imageURL} onClick={onClick}>
            <div>
                <div className="img"></div>
                <div className="title">
                    <h3>{title}</h3>
                    <div>Shop Now</div>
                </div>
            </div>
        </StyledCategoryButton>
    );
}

export default CategoryButton;