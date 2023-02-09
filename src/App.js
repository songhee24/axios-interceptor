import './App.css';
import {AppRoutes} from "./routes/AppRoutes";
import {Navigate, useLocation} from "react-router-dom";

function App() {
    const {pathname} = useLocation()

    if (pathname === '/') {
        return <Navigate to={'/login'} replace={true}/>
    }

    return (
        <AppRoutes/>
    );
}

export default App;
