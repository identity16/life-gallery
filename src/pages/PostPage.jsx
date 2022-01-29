import "./PostPage.scss";

function PostPage({ post, author }) {
    return (
        <section className="PostPage">
            <header>
                <h5>{author.nickName} 작가님</h5>
                <h1>{post.title}</h1>
            </header>
            <img src={post.imageLink} alt={post.title} />
            <p>
                {post.content
                    .trim()
                    .split(/\n/g)
                    .map((line) => {
                        return (
                            <span key={line}>
                                {line}
                                <br />
                            </span>
                        );
                    })}
            </p>
        </section>
    );
}

export default PostPage;
