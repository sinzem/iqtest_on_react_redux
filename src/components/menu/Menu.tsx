import {NavLink} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { menuType, setMenuState } from "./menuSlice";
import { setTestPageActive, setTestPageNotActive } from "../../pages/test/testPageSlice";

const Menu = () => {

    const {menuState}: any = useSelector<menuType>(state => state.menuState); 

    const dispatch = useDispatch();
    
    const toTestPage = () => {
        dispatch(setMenuState());
        dispatch(setTestPageActive());
    }

    const toMainPage = () => {
        dispatch(setMenuState());
        dispatch(setTestPageNotActive());
    }

    const toInformBlock = () => {
        let windowHeight = document.documentElement.clientHeight;
        toMainPage();
        window.scrollTo(0, windowHeight)
    }
    

    const menuActive = menuState ? "active" : null;

    return (
        <section className={"menu " + menuActive}>
            <div className={"cross " + menuActive} onClick={() => dispatch(setMenuState())}>
                <div className="cross__line"></div>
                <div className="cross__line"></div>
            </div>
            <nav className="menu__nav">
                <ul>
                    <li>
                        <NavLink end to="/" className="to_main" onClick={toMainPage}>Главная</NavLink>
                    </li>
                    <li>
                        {/* <a href="#">Информация о тесте</a> */}
                        <NavLink to="/" className="to_main" onClick={toInformBlock}>Информация о тесте</NavLink>
                    </li>
                    <li>
                        <NavLink end to="/test" className="go_test" onClick={toTestPage}>Пройти тест</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Menu;