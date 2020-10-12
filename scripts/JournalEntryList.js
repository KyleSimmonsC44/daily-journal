import { useJournalEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'

/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

 export const JournalEntryHTML = () =>{

    const contentElement = document.querySelector(".prevEntries")

    const journalLoop = useJournalEntries()

    let journalHTMLRep = ""
    for (const journalObject of journalLoop){
        journalHTMLRep += JournalEntryComponent(journalObject)
    }

contentElement.innerHTML +=`

${journalHTMLRep}
`
 }