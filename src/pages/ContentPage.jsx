import "./ContentPage.scss";

function ContentPage({ content }) {
    return (
        <section className="ContentPage">
            <header>
                <h5>{content.author.name} 작가님</h5>
                <h1>{content.title}</h1>
            </header>
            <img src={content.imgSrc} alt={content.title} />
            <p>
                {content.description
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

export default ContentPage;
