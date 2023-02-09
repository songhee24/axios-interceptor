import {Navigate} from "react-router-dom";

export const PrivateRoute = ({AccessComponent, fallbackPath, isAuth}) => {
    if(isAuth) {
        return <AccessComponent />
    }

    return <Navigate to={fallbackPath} />
}
