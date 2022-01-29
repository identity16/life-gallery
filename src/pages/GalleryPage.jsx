import { useEffect, useState } from "react";
import { Navigation, History } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getUser } from "../api/user";
import { getPosts } from "../api/post";
import IntroPage from "./IntroPage";
import PostPage from "./PostPage";
import OutroPage from "./OutroPage";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/history";
import { useParams } from "react-router-dom";

function GalleryPage() {
    const { userId, postId } = useParams();

    const [controller, setController] = useState(null);
    const [user, setUser] = useState(null);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (controller && posts.length > 0) {
            let targetSlide;

            if (postId === "intro") {
                targetSlide = 0;
            } else if (postId === "outro") {
                targetSlide = posts.length + 1;
            } else {
                const pid = posts.findIndex(
                    (post) => post.id === parseInt(postId)
                );

                if (pid < 0) return;

                targetSlide = pid + 1;
            }

            controller.slideTo(targetSlide, 0);
        }
    }, [controller, posts, postId]);

    useEffect(() => {
        getUser(userId).then(setUser);
    }, [userId]);

    useEffect(() => {
        getPosts(user).then(setPosts);
    }, [user]);

    return (
        <Swiper
            modules={[Navigation, History]}
            navigation
            history={{
                key: `${userId}/posts`,
                replaceState: true,
            }}
            onSwiper={setController}
        >
            <SwiperSlide data-history="intro">
                <IntroPage author={user} />
            </SwiperSlide>
            {posts.map((post) => (
                <SwiperSlide key={post.id} data-history={post.id}>
                    <PostPage post={post} author={user} />
                </SwiperSlide>
            ))}
            <SwiperSlide data-history="outro">
                <OutroPage author={user} />
            </SwiperSlide>
        </Swiper>
    );
}

export default GalleryPage;
