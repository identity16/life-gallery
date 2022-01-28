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
        featuredImages: [
            {
                src: "https://randomwordgenerator.com/img/picture-generator/53e3d6414255a414f1dc8460962e33791c3ad6e04e507440762e7ad39544c1_640.jpg",
                description: "Image",
            },
            {
                src: "https://randomwordgenerator.com/img/picture-generator/57e3d5444f53ac14f1dc8460962e33791c3ad6e04e507440772872d3914ccc_640.jpg",
                description: "Image",
            },
            {
                src: "https://randomwordgenerator.com/img/picture-generator/52e4dd444f57ab14f1dc8460962e33791c3ad6e04e5074417c2e7dd39249c3_640.jpg",
                description: "Image",
            },
        ],
    });
};
