import axios from "axios";
import { User } from "../model/user";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const getUser = async (id) => {
    const { data: user } = await axios.get(`/users/${id}`);

    if (!user) return null;

    return new User({
        id: user.id,
        fullName: user.full_name,
        nickName: user.nick_name,
        kakaoId: user.kakao_id,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
        featuredImages: user.recenet_post_images,
    });
};
