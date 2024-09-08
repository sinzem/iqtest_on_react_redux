
import "../../styles/style.scss";


const Header = (props: any) => {

    const {title, img} = props;

    return (
        <header className="header">
             <div className="header__title">
                    <div className="header__title__wrap">
                        <div className="header__img">
                            <img src={img}/>
                        </div>
                        <div className="header__label">
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            <div className="hamburger">
                <div className="hamburger__line"></div>
                <div className="hamburger__line"></div>
                <div className="hamburger__line"></div>
            </div>
        </header>
    );
};

export default Header;