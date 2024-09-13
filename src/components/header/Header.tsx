
import {FC, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { setMenuState } from "../menu/menuSlice";
import { testPageType } from "../../pages/test/testPageSlice";

import blueBrain from "../../assets/img/blue_brain.png";

import "../../styles/style.scss";
interface headerProps {
    title?: string;
    img?: boolean;
}

const Header: FC<headerProps> = (props) => {

    const {title, img} = props;

    const [headerTitle, setHeaderTitle] = useState<string>("header__title__wrap")
    const {testPageActive}: any = useSelector<testPageType>(state => state.testPageActive);

    const dispatch = useDispatch();

    useEffect(() => {
        setHeaderTitle("header__title__wrap active");
    }, [testPageActive]);

    return (
        <>
            <header className="header">
                <div className="header__title">
                    <div className={headerTitle}>
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
        </>
    );
};

export default Header;