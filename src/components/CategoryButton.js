import styled from "styled-components";

const StyledComp = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    padding-top: 70%;
    height: 0px;
    justify-content: center;
    align-items: center;
    font-variant: small-caps;
    font-weight: bold;
    overflow: hidden;

    & > div {
        & > div {
            width: 200px;
            padding: 10px;
            position: Absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(255,255,255,0.7);
            box-shadow: 2px 2px 4px black;

            h3 {
                font-size: 1.4em;
            }

            & > div, & > h3 {
                margin: 20px;
                text-align: center;
            }
        }

        img {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            ${props => props.imageAdj.scaleByHeight ? 'width: auto; height: 100%;' : ''};
            ${props => props.imageAdj.left !== undefined ? `left: ${props.imageAdj.left}px;` : ''};
            ${props => props.imageAdj.top !== undefined ? `top: ${props.imageAdj.top}px;` : ''};
            transition: 0.5s;
        }
    }

    &:hover {
        cursor: pointer;

        img {
            transform: scale(1.1);
            transition: 5s linear;
        }

        & > div > div {
            background-color: rgba(255,255,255,0.9);
        }
    }
`;

const CategoryButton = ({title='', imageURL='', imageAdj={}}) => {
    return (
        <StyledComp imageURL={imageURL} imageAdj={imageAdj}>
            <div>
                <img src={imageURL}/>
                <div>
                    <h3>{title}</h3>
                    <div>Shop Now</div>
                </div>
            </div>
        </StyledComp>
    );
}

export default CategoryButton;