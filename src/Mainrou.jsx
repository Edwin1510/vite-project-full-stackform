import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sentitem from "./Sentitem"
import App from "./App"
import Forgot from "./Forgot"


const Approuter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<App />} />
                    <Route path="/sent" element={<Sentitem />} />
                    <Route path="/forgot" element={<Forgot />} />
                </Routes>


            </BrowserRouter>

        </>
    )
}


export default Approuter