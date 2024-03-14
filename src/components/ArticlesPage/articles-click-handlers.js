function handleTopicSelection(
    e,
    setSelectedTopic,
    setHasTopicUpdated,
) {
    setSelectedTopic(e.target.value);
    setHasTopicUpdated(true);
}

export { handleTopicSelection };
