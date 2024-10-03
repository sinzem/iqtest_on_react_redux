import Header from "../../components/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { TestPageType, setTestPageActive, fetchTest, fetchTestQuestion } from "./testPageSlice";
import "../../styles/style.scss";
import { useEffect, useState } from "react";

const Test = () => {

    const [active, setActive] = useState("test");
    
    const {testPageActive, testLength, testLoadingState, testQuestionID, testQuestionObject}: any = useSelector<TestPageType>(state => state.testPageActive);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTest());
        dispatch(fetchTestQuestion(testQuestionID));
    }, []);

    useEffect(() => {
        console.log(testLength);
        console.log(testQuestionObject);
    }, [/* testLength,  */testQuestionObject])
    
    useEffect(() => {
        setActive("test active");
    }, [testPageActive]);

    return (
        <div className="test_page">
            <Header title="Тест на определение IQ" img={true}/>
            <section className={active}>
                <div className="test__progress">
                    <div className="test__progress_front"></div>
                </div>
                <div className="test__wrap">
                    <div className="test__window">
                        <div className="test__tape"></div>
                    </div>
                </div>
                <button className="button test__button">Далее</button>
            </section>
        </div>
    );
};

export default Test;