import { HashRouter,Routes,Route, Navigate } from "react-router-dom"
import Films from "../views/Films"
import Cinemas from "../views/Cinemas"
import Center from "../views/Center"
import NotFound from "../views/NotFound"
import NowPlaying from "../views/films/Nowplaying"
import ComingSoon from "../views/films/Comingsoon"
import Detail from "../views/Detail"

export default function IndexRouter(props) {
    return (
        <div>
            <HashRouter>
                {props.children}
                <Routes>
                    <Route path="films" element={<Films />}>
                        <Route index element={<NowPlaying />} />
                        <Route path="now" element={<NowPlaying />} />
                        <Route path="soon" element={<ComingSoon />} />
                    </Route>
                
                    <Route path="/cinemas" element={<Cinemas />} />
                    <Route path="/center" element={<Center />} />
                    <Route path="detail/:filmId" element={<Detail />} />
                    <Route path="/" element={<Navigate to="/films" replace />} />   
                    <Route path="*" element={<NotFound />} />
                </Routes>
                
            </HashRouter>
            
        </div>
    )
}