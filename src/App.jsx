import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./App.scss";
import { useEffect, useState } from "react";
import { getAuthor } from "./api/author";
import { getContents } from "./api/content";
import IntroPage from "./pages/IntroPage";
import ContentPage from "./pages/ContentPage";
import OutroPage from "./pages/OutroPage";

function App() {
    const [author, setAuthor] = useState({
        id: -1,
        name: "",
        featuredImages: [],
    });

    const [contents, setContents] = useState([]);

    useEffect(() => {
        setAuthor(getAuthor(1));
    }, []);

    useEffect(() => {
        setContents(getContents(author));
    }, [author]);

    return (
        <div className="App">
            <Swiper modules={[Navigation]} navigation>
                <SwiperSlide>
                    <IntroPage author={author} />
                </SwiperSlide>
                {contents.map((content) => (
                    <SwiperSlide key={content.id}>
                        <ContentPage content={content} />
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    <OutroPage author={author} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default App;
