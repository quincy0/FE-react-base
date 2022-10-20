import Tabbar from "./components/Tabbar";
import IndexRouter from "./router/indexRouter";

export default function App() {
    return (
        <div>
            <IndexRouter>
                <Tabbar></Tabbar>
            </IndexRouter>
        </div>
    )
}