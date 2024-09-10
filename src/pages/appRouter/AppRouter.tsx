import { Route, Routes } from "react-router-dom";

import Main from "../main/Main";
import Test from "../test/Test";
import Processing from "../processing/Processing";
import Result from "../result/Result";

const AppRouter = () => {

    const idRand = () => String(Math.ceil(Math.random() * 1000) * Math.ceil(Math.random() * 1000));

    return (
        <Routes>
            {/* <Route path="*" element={<Unexistent />} exact id={idRand()}/> */}
            <Route path="/" element={<Main />} id={idRand()}/>
            <Route path="/test" element={<Test />} id={idRand()}/>
            <Route path="/processing" element={<Processing />} id={idRand()}/>
            <Route path="/result" element={<Result />} id={idRand()}/>
        </Routes>
    );
};

export default AppRouter;