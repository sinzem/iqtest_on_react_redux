
import {FC} from "react";
import "../../styles/style.scss";
import Menu from "../menu/Menu";
import blueBrain from "../../assets/img/blue_brain.png";
import { setMenuState } from "../menu/menuSlice";
import { useDispatch } from "react-redux";

interface headerProps {
    title?: string;
    img?: boolean;
}

const Header: FC<headerProps> = (props) => {

    const {title, img} = props;

    const dispatch = useDispatch();
    return (
        <>
            <header className="header">
                <div className="header__title">
                    <div className="header__title__wrap">
                        <div className="header__img">
                            {img === true ? <img src={blueBrain} alt="blue electric brain"/> : null}
                        </div>
                        <div className="header__label">
                            {title ? <h2>{title}</h2> : null}
                        </div>
                        </div>
                    </div>
                <div className="hamburger" onClick={() => dispatch(setMenuState())}>
                    <div className="hamburger__line"></div>
                    <div className="hamburger__line"></div>
                    <div className="hamburger__line"></div>
                </div>
            </header>
            <Menu />
        </>
      
    );
};

export default Header;