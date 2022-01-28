import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import GalleryPage from "./pages/GalleryPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/:userId" exact element={<GalleryPage />} />
                    <Route
                        path="/:userId/posts/:postId"
                        element={<GalleryPage />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
