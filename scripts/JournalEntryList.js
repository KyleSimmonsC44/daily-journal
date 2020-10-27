import { useJournalEntries, getEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'

/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
//  */
const eventHub = document.querySelector(".container")
export const EntriesList = () =>{
    getEntries()
    .then(() =>{
        const allEntries = useJournalEntries()
        render(allEntries)
    })
}


const render = (entriesArray) =>{
    
    const contentElement = document.querySelector(".prevEntries__scroll")
     let journalHTMLRep = ""
     for (const entriesObject of entriesArray){
         journalHTMLRep += JournalEntryComponent(entriesObject)
        }
        contentElement.innerHTML =`
        ${journalHTMLRep}`
    }

    eventHub.addEventListener("entriesStateChanged", () =>EntriesList())