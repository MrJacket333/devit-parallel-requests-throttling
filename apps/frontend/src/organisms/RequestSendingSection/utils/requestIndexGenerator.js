export function* requestIndexGenerator(maxRequestsCount) {
    let currentRequestIndex = 1;
    while (currentRequestIndex <= maxRequestsCount) {
        yield currentRequestIndex;
        currentRequestIndex++;
    }
}