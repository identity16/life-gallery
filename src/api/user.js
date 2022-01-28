import { User } from "../model/user";

export const getUser = (id) => {
    const response = {
        id,
        full_name: "홍길동",
        nick_name: "",
        kakao_id: "x_12345",
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
        created_at: new Date(),
        updated_at: new Date(),
    };

    return new User({
        id: response.id,
        fullName: response.full_name,
        nickName: response.nick_name,
        kakaoId: response.kakao_id,
        createdAt: response.created_at,
        updatedAt: response.updated_at,
        featuredImages: response.featuredImages,
    });
};
