import Header from "../../components/header/Header";
import blueBrain from "../../assets/img/blue_brain.png";
import arrowUp from "../../assets/img/arrow_up.png";
import rectangle12 from "../../assets/img/rectangle_12.png";
import rectangle2 from "../../assets/img/Rectangle_2.png";
import breckets from "../../assets/img/breckets.png";
import firstPageBrain from "../../assets/img/first-page_brain.png";
import backgroundLightning from "../../assets/img/background_lightning.png";

import "../../styles/style.scss";
import { useRef } from "react";

const Main = () => {

    
    const informBlock = useRef<HTMLDivElement>(null);

    const scrollTos = () => {
        // let informBlockOffset: number | undefined = informBlock?.current?.offsetTop;
        console.log("ok");
        window.scrollTo(0, 100);
    }

    return (
        <div>
            <Header />
            <section className="main">
                <div className="slogan">
                    <div className="slogan__wrap">
                        <h2 className="subtitle slogan__subtitle">Пройдите точный и быстрый</h2>
                        <h1 className="title slogan__title">Тест на определение IQ</h1>
                        <div className="slogan__img">
                            <img src={blueBrain} alt="brain" />
                        </div>
                        <button className="button slogan__button go_test">Пройти тест</button>
                        <h3 className="description slogan__description slogan__description_top">
                            И получите рекомендации по развитию своего интеллекта
                        </h3>
                        <h3 className="description slogan__description slogan__description_bottom">
                            и улучшению финансового благосостояния и личной жизни
                        </h3>
                        <div className="slogan__link" onClick={scrollTos}>
                            <a href="#"><img src={arrowUp} alt="arrow" /></a>
                        </div>
                        <div className="slogan__link__label">Подробнее</div>
                    </div>
                </div>
                <div ref={informBlock} className="quotation">
                    <div className="quotation__sheet_middle">
                        <img src={rectangle12} alt="space" />
                    </div>
                    <div className="quotation__sheet_top">
                        <img src={rectangle2} alt="stain" />
                    </div>
                    <div className="quotation__wrap">
                        <div className="quotation__brackets quotation__brackets_top">
                            <img src={breckets} alt="brackets" />
                        </div>
                        <div className="description quotation__description">
                            <p>Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,</p> 
                            <p>но и выработать список рекомендаций для повышения этого показателя.</p> 
                        </div>
                        <div className="quotation__brackets quotation__brackets_bottom">
                            <img src={breckets} alt="brackets" />
                        </div>
                    </div>
                </div>
                <div className="promises">
                    <div className="description promises__description">
                        <p>Также по результатам теста</p>
                        <p><span>ВЫ ПОЛУЧИТЕ</span> подробные <span>СОВЕТЫ</span> по определению наиболее перспективной <span>ДЛЯ ВАШЕГО ТИПА интеллекта СФЕРЫ ДЕЯТЕЛЬНОСТИ</span>,</p>
                        <p>которая принесет вам скорейший финансовый результат</p>
                    </div>
                    <div className="promises__img">
                        <img src={firstPageBrain} alt="brain_schema" />
                    </div>
                    <button className="button promises__button go_test">Пройти тест</button>
                </div>
                <div className="final">
                    <div className="description final__description final__description_top">
                        <p>Прохождение теста займет у вас не более <span>12 минут</span>, а его <span className="span_bold">результаты</span> вы сможете <span>использовать всю жизнь</span></p>
                    </div>
                    <div className="description final__description final__description_bottom">
                        <p>Профессиональная интерпретация и детально <span>проработанные рекомендации</span> позволят вам качественно <span>изменить все аспекты своей жизни:</span> от финансового до любовного.</p>
                    </div>
                    <button className="button final__button go_test go_test">Пройти тест</button>
                    <div className="final__copy">
                        <p>&copy;<span></span>2019</p>
                    </div>
                    <div className="final__lightning final__lightning_top">
                        <img src={backgroundLightning} alt="lightning" />
                    </div>
                    <div className="final__lightning final__lightning_bottom">
                        <img src={backgroundLightning} alt="lightning" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;