export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            
                <p>Date: ${entry.dateOfEntry}<p>
                <p>Concept: ${entry.concept}</p>
                <p>Entry: ${entry.entry}</p>
                <p>Mood: ${entry.mood}</p>
            
        </section>
    `
}