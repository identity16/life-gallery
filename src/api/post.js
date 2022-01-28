import { Post } from "../model/post";
import { getUser } from "./user";

export const getPosts = (author) => {
    const result = [];

    for (let i = 0; i < 3; i++) {
        result.push(getPost(i));
    }

    return result;
};

export const getPost = (id) => {
    const response = {
        id,
        content:
            "한해를 보내며...\n올 한해동안 받은 은혜에\n감사의 초를켭니다.\n마음으로\n용서못하고\n알게 모르게\n남에게\n섭섭하게\n한일들을\n참회에 촛불을 켭니다.\n소리없이 쌓이는\n하얀 눈처럼 행복이\n당신의 마음에 소복소복\n쌓이길 평화도 건강도\n함께하시길 기원합니다.",
        title: "참회의 초를 켜며..",
        author: getUser(1),
        image_link:
            "https://images.unsplash.com/photo-1572203176799-40836603681d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
        created_at: new Date(),
        updated_at: new Date(),
    };

    return new Post({
        id: response.id,
        title: response.title,
        content: response.content,
        author: response.author,
        imageLink: response.image_link,
        createdAt: response.created_at,
        updatedAt: response.updated_at,
    });
};
