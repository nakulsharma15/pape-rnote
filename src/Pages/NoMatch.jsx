import { Footer , Header } from "../Components/index.js";

export default function NoMatch() {

    return (
        <div className="flex-column stick-bottom">
            <Header />
            <h1>Oops! The page you are looking for can't be found.</h1>
            <Footer />
        </div>)
}