import { Route, Routes } from "react-router-dom";
import { Home, Archive, Trash, Login, Signup, NoMatch, MockMan} from "../Pages/index";
import RequireAuth from "../Utils/requiresAuth";

function RoutePaths() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<RequireAuth><Archive /></RequireAuth>} />
            <Route path="/trash" element={<RequireAuth><Trash /></RequireAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mockman" element={<MockMan />} />
            <Route path="*" element={<NoMatch />}/>
        </Routes>
    )
}
export default RoutePaths;