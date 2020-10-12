export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <ul>
                <li> ${entry.date}</li>
                <p> ${entry.entry}</p>
            </ul>
        </section>
    `
}