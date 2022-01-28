export class Post {
    constructor({
        id,
        title,
        content,
        author,
        imageLink,
        createdAt,
        updatedAt,
    }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.imageLink = imageLink;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
