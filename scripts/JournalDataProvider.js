/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "10/1/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "meh."
    },
    {
        id: 2,
        date: "10/5/2020",
        concept: "HTML & CSS",
        entry: "Finished group projects! I feel like I have a good handle on CSS now!!!",
        mood: "Happy!"
    },
    {
        id: 3,
        date: "10/7/2020",
        concept: "Javascript",
        entry: "We started learning how to automate html using javascript...Im lost again...",
        mood: "frustrated."
    },

]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}