function handleTopicSelection(e, setSelectedTopic, setHasTopicUpdated) {
    setSelectedTopic(e.target.value);
    setHasTopicUpdated(true);
}

function handleSortCriteriaSelection(e, 
    setSelectedSortCriteria
) {
    setSelectedSortCriteria(e.target.value);
}

function handleSortOrderSelection(
    e,
    setSelectedSortOrder
) {
    setSelectedSortOrder(e.target.value)
}

export {
    handleTopicSelection,
    handleSortCriteriaSelection,
    handleSortOrderSelection,
};
