import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./App.scss";
import { useEffect, useState } from "react";
import { getAuthor } from "./api/author";
import IntroPage from "./pages/IntroPage";

function App() {
    const [author, setAuthor] = useState({
        id: -1,
        name: "",
        featuredImages: [],
    });

    useEffect(() => {
        setAuthor(getAuthor(1));
    }, []);

    return (
        <div className="App">
            <Swiper modules={[Navigation]} navigation>
                <SwiperSlide>
                    <IntroPage author={author} />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default App;
