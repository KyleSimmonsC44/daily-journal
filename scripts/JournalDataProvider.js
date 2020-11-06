/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () =>{
    const entriesStateChangedEvent = new CustomEvent("entriesStateChanged")

    eventHub.dispatchEvent(entriesStateChangedEvent)
}

let entries = []
export const getEntries = () => {
    return fetch('http://localhost:8088/entries?_expand=mood')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
export const saveEntries = entries => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entries)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}