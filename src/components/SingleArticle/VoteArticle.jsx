import { useState } from "react";
import { handleDislikeClick, handleLikeClick } from "./click-handlers";
import "./VoteArticle.css"

function VoteArticle({ article_id, votes }) {
    const [voteCount, setVoteCount] = useState(votes);
    const [hasErrorOccurred, setHasErrorOccurred] = useState(false);

    return (
        <div id="article-voting">
            <p>Votes: {voteCount}</p>
            <div id="vote-buttons">
                <button
                    onClick={() =>
                        handleLikeClick(
                            article_id,
                            setVoteCount,
                            setHasErrorOccurred
                        )
                    }
                >
                    Like
                </button>
                <button
                    onClick={() =>
                        handleDislikeClick(
                            article_id,
                            setVoteCount,
                            setHasErrorOccurred
                        )
                    }
                >
                    Dislike
                </button>
            </div>
            {hasErrorOccurred ? <p id="article-vote-error">Something went wrong</p> : null}
        </div>
    );
}

export default VoteArticle;
