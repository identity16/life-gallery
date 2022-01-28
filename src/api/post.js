import axios from "axios";
import { Post } from "../model/post";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const getPosts = async (author) => {
    if (!author) return [];

    const { data } = await axios.get(`/users/${author.id}/posts`);

    const posts = data?.posts;

    if (!posts) return [];

    return posts.map(
        ({ id, title, content, author, image_link, created_at, updated_at }) =>
            new Post({
                id,
                title,
                content,
                author,
                imageLink: image_link,
                createdAt: created_at,
                updatedAt: updated_at,
            })
    );
};
