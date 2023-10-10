import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../App";
import {Error} from "../pages/error/Error";
import {Home} from "../pages/home/Home";
import {Archive} from "../pages/archive/Archive";
import {Detail} from "../pages/detail/Detail";
import {loader as detailLoader } from "./Detail";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route Component={App} errorElement={<Error />}>
            <Route index={true} Component={Home}/>
            <Route path={"/archive"} Component={Archive} />
            <Route path={"/detail/:id"} Component={Detail} loader={detailLoader}/>
        </Route>
    )
)