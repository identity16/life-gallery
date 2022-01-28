import "./OutroPage.scss";

function OutroPage({ author }) {
    return (
        author && (
            <section className="OutroPage">
                <h1>
                    {author.nickName} 작가님의 작품을
                    <br />
                    끝까지 봐주셔서
                    <br />
                    감사합니다
                </h1>
                <div className="share-container">
                    <h2>공유하기</h2>
                    <div className="share-btn-container">
                        <div className="btn-share" />
                        <div className="btn-share" />
                        <div className="btn-share" />
                        <div className="btn-share" />
                    </div>
                </div>
            </section>
        )
    );
}

export default OutroPage;
