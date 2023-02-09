import {Route, Routes} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute";
import {LoginPage} from "../containers/Login.Page";
import {Branches} from "../containers/Branches";

export const AppRoutes = () => {
    // get token from store or is auth boolean value
    const isAuth = true
    return (
        <Routes>
            <Route path={'/login'} element={
                <PrivateRoute
                    AccessComponent={LoginPage}
                    isAuth={!isAuth}
                    fallbackPath={'/branches'}
                />}
            />
            <Route path={'/branches'} element={
                <PrivateRoute
                    AccessComponent={Branches}
                    isAuth={isAuth}
                    fallbackPath={'/login'}
                />}
            />
        </Routes>
    )
}
