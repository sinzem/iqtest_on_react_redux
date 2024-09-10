
import { useSelector } from "react-redux";
import { menuType } from "./menuSlice";
import { setMenuState } from "./menuSlice";
import { useDispatch } from "react-redux";


const Menu = () => {

    const {menuState}: any = useSelector<menuType>(state => state.menuState); 

    const dispatch = useDispatch();
    
    const menuActive = menuState ? "menu active" : "menu";

    return (
        <section className={menuActive}>
            <div className="cross" onClick={() => dispatch(setMenuState())}>
                <div className="cross__line"></div>
                <div className="cross__line"></div>
            </div>
            <nav className="menu__nav">
                <ul>
                    <li>
                        <a className="to_main" href="#">Главная</a>
                    </li>
                    <li>
                        <a href="#">Информация о тесте</a>
                    </li>
                    <li>
                        <a className="go_test" href="#">Пройти тест</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Menu;