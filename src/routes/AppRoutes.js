import {Route, Routes} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute";
import {LoginPage} from "../containers/Login.Page";

export const AppRoutes = () => {
    // get token from store or is auth boolean value
    const isAuth = false
    return (
        <Routes>
            <Route path={'/login'} element={
                <PrivateRoute
                    AccessComponent={LoginPage}
                    isAuth={!isAuth}
                    fallbackPath={'/'}
                />}
            />
        </Routes>
    )
}
