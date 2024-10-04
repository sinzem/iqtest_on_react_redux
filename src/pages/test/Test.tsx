import Header from "../../components/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { TestPageType, setTestPageActive, fetchTest, fetchTestQuestion, setTestQuestionID } from "./testPageSlice";
import "../../styles/style.scss";
import { useEffect, useState } from "react";

const Test = () => {

    const [active, setActive] = useState("test");
    
    const {testPageActive, testLength, testLoadingState, testQuestionID, testQuestionObject}: any = useSelector<TestPageType>(state => state.testPageActive);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTestQuestionID(testQuestionID + 1));
        dispatch(fetchTest());
    }, []);

    useEffect(() => {
        dispatch(fetchTestQuestion(testQuestionID));
    }, [testQuestionID]);

    useEffect(() => {
        console.log(testQuestionID);
        console.log(testQuestionObject);
    }, [testQuestionObject])
    
    useEffect(() => {
        setActive("test active");
    }, [testPageActive]);

    const nextQuestion = () => {
        dispatch(setTestQuestionID(testQuestionID + 1))
    }

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
                <button className="button test__button" onClick={nextQuestion}>Далее</button>
            </section>
        </div>
    );
};

export default Test;