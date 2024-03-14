import "./SortArticle.css";
import {
    handleSortCriteriaSelection,
    handleSortOrderSelection,
} from "./articles-click-handlers";

function SortArticle({
    selectedSortCriteria,
    setSelectedSortCriteria,
    selectedSortOrder,
    setSelectedSortOrder,
}) {
    return (
        <form id="sort-form">
            <label htmlFor="sort-criteria">Sort: </label>
            <select
                id="sort-criteria"
                onChange={(e) =>
                    handleSortCriteriaSelection(
                        e,
                        setSelectedSortCriteria,
                    )
                }
                value={selectedSortCriteria}
            >
                <option value="created_at">Date</option>
                <option value="votes">Votes</option>
                <option value="comment_count">Comments</option>
            </select>
            <label htmlFor="sort-direction">Order:</label>
            <select
                id="sort-direction"
                onChange={(e) =>
                    handleSortOrderSelection(
                        e,
                        setSelectedSortOrder
                    )
                }
                value={selectedSortOrder}
            >
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
            </select>
        </form>
    );
}

export default SortArticle;
