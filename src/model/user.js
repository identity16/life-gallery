export class User {
    constructor({
        id,
        fullName,
        nickName,
        kakaoId,
        userState,
        createdAt,
        updatedAt,
        featuredImages,
    }) {
        this.id = id;
        this.fullName = fullName;
        this.nickName = nickName;
        this.kakaoId = kakaoId;
        this.userState = userState;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.featuredImages = featuredImages;
    }
}
