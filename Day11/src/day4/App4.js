import {BrowserRouter, Route, Routes} from "react-router-dom"
import Parent from "./Parent"
import AjaxExF2 from "../day3/AjaxExF2"
import Home from "./Home"
export default function App4()
{

    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}>
            <Route path="parent" element={<Parent></Parent>}></Route>
            <Route path="ajax" element={<AjaxExF2></AjaxExF2>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    )

}