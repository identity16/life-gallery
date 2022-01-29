import Masonry from "react-masonry-css";
import "./IntroPage.scss";

function IntroPage({ author }) {
    return author ? (
        <section className="IntroPage">
            <h1>{author.nickName} 작가님</h1>
            {author.featuredImages.length > 0 && (
                <>
                    <img
                        className="featured-image featured-image-main"
                        src={author.featuredImages[0].src}
                        alt={author.featuredImages[0].description}
                    />
                    <Masonry
                        breakpointCols={2}
                        className="featured-image-list"
                        columnClassName="featured-image-list_column"
                    >
                        {author.featuredImages.map((fImage, idx) => (
                            <img
                                className="featured-image"
                                key={author.nickName + idx}
                                src={fImage}
                                alt={author.nickName + idx}
                            />
                        ))}
                    </Masonry>
                </>
            )}
        </section>
    ) : (
        <p>Loading..</p>
    );
}

export default IntroPage;
