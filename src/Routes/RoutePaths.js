import { Route, Routes } from "react-router-dom";
import { Home, Archive, Trash, Login, Signup} from "../Pages/index";

function RoutePaths() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}
export default RoutePaths;