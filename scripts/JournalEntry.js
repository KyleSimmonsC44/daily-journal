export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}"  class="journalEntry" value="${entry.id}">
            
                <p>Date: ${entry.dateOfEntry}<p>
                <p>Concept: ${entry.concept}</p>
                <p>Entry: ${entry.entry}</p>
                <p>Mood: ${entry.mood.label}</p>
                <div class="delete">
                <button class="deleteButton" id="deleteNote--${entry.id}">Delete</button>
                <button class="editButton" id="editNote--${entry.id}">Edit</button>
                </div>
        </section>
    `
}