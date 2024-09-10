import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import { menuType } from "./menuSlice";
import { setMenuState } from "./menuSlice";
import { useDispatch } from "react-redux";


const Menu = () => {

    const {menuState}: any = useSelector<menuType>(state => state.menuState); 

    const dispatch = useDispatch();
    
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
                        <NavLink end to="/" className="to_main" onClick={() => dispatch(setMenuState())}>Главная</NavLink>
                    </li>
                    <li>
                        <a href="#">Информация о тесте</a>
                    </li>
                    <li>
                        <NavLink end to="/test" className="go_test" onClick={() => dispatch(setMenuState())}>Пройти тест</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Menu;