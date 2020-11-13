import {editEntries, saveEntries, useJournalEntries} from "./JournalDataProvider.js"
import { useMood, getMood } from "./mood/MoodDataProvider.js"

const contentTarget = document.querySelector(".container")

const eventHub = document.querySelector(".container")

const render = (moodArray) =>{
    contentTarget.innerHTML=`
    <article class="containerTop">
    <!-- date concepts covered, and mood -->
    <div class="date">
        <h4>Date</h4>
        <!-- calender date selector -->
        <form action="/action_page.php">
            <input type="date" id="date" name="date">
          </form>
    </div>
    <div class="conceptsCovered">
        <h4>Concept Covered</h4>
        <!-- concepts covered text field -->
        <form action="/action_page.php">
            <input type="text" id="conceptCovered" name="conceptCovered">
            <input type="hidden" name="entryId" id="entryId">
    </div>
    <div class="mood">
        <h4>Mood</h4>
        <!-- drop down menu for moods -->
        <select name="mood" id="mood">
            <option class="dropdown" value="0">How you Feelin?</option>
            ${moodArray.map(
                mood =>{
                    return`<option class="dropdown" value="${mood.id}">${mood.label}</option>`
                })}
            </select>
    </div>
</article>
<article class="containerMiddle">
    <!-- journal entries, previous entries -->
    <!-- largest flexbox -->
    <div class="journalField">
        <h4>Journal Entry</h4>
        <!-- journal entry text field -->
            <textarea id="journalField" name="journalField" rows="14" cols="75">
              </textarea>
            </form><br>
            <button id="saveEntry">Save Entry</button>
    </div>
    <div class="prevEntries">
        <h4>Previous Entries</h4>
        <div class="select" id="select">
        </div>
        <div class="prevEntries__scroll">
        </div>
    </div>
</article>


    `
}

eventHub.addEventListener("click", clickEvent =>{
    const id = document.querySelector("#entryId")
    if(clickEvent.target.id === "saveEntry" && document.querySelector("#mood").value !== "0" && id.value === ""){
        const dateOfEntry = document.querySelector("#date").value
        const concept = document.querySelector("#conceptCovered").value
        const entry = document.querySelector("#journalField").value
        const moodId = parseInt(document.querySelector("#mood").value)
        const id = document.querySelector("#entryId").value
        const newEntry = {
            dateOfEntry,
            concept,
            entry,
            moodId
        }
        saveEntries(newEntry)
        console.log(id, newEntry)
    }
    else if(clickEvent.target.id === "saveEntry" && document.querySelector("#mood").value !== "0"){
        const dateOfEntry = document.querySelector("#date").value
        const concept = document.querySelector("#conceptCovered").value
        const entry = document.querySelector("#journalField").value
        const moodId = parseInt(document.querySelector("#mood").value)
        const id = document.querySelector("#entryId").value
        const newEntry = {
            dateOfEntry,
            concept,
            entry,
            moodId
        }
        // console.log(id, newEntry)
        editEntries(newEntry, id)
        }
    
})

export const EntryForm = () =>{
    getMood()
    .then(()=>{
        const moods = useMood()
        render(moods)
    })
}
eventHub.addEventListener("entriesStateChanged", () =>EntryForm())

eventHub.addEventListener("editButton", ()=>{
    const moodArray = useMood()
    const entriesCollection = useJournalEntries()
    const entryToEdit = entriesCollection.find( entryObj =>{
        return entryObj.id === parseInt(event.detail.entryId)
    })
    let entryId = document.querySelector("#entryId")
    let date = document.querySelector("#date")
    let concept = document.querySelector("#conceptCovered")
    let entry = document.querySelector("#journalField")
    let mood = document.querySelector("#mood")
entry.value = entryToEdit.entry
entryId.value = entryToEdit.id
date.value = entryToEdit.dateOfEntry
concept.value = entryToEdit.concept
mood.value = entryToEdit.mood.id
// console.log(entryToEdit.id)
// editField(entryToEdit, moodArray)
})


// const editField = (editObj, moodArray) =>{
//     const contentTarget = document.querySelector(".container")

//     return contentTarget.innerHTML= `
//     <article class="containerTop">
//     <!-- date concepts covered, and mood -->
//     <div class="date">
//         <h4>Date</h4>
//         <!-- calender date selector -->
//         <form action="/action_page.php">
//             <input type="date" id="date" name="date" value="${editObj.dateOfEntry}">
//           </form>
//     </div>
//     <div class="conceptsCovered">
//         <h4>Concept Covered</h4>
//         <!-- concepts covered text field -->
//         <form action="/action_page.php">
//             <input type="text" id="conceptCovered" name="conceptCovered" value="${editObj.concept}">
//             <input type="hidden" name="entryId" id="entryId" value="${editObj.id}">
//     </div>
//     <div class="mood">
//         <h4>Mood</h4>
//         <!-- drop down menu for moods -->
//         <select name="mood" id="mood">
//         <option class="dropdown" value="${editObj.mood.id}">${editObj.mood.label}</option>
//         <option class="dropdown" value="0">How you Feelin?</option>
//             ${moodArray.map(
//                 mood =>{
//                     return`<option class="dropdown" value="${mood.id}">${mood.label}</option>`
//                 })}
//             </select>
//     </div>
// </article>
// <article class="containerMiddle">
//     <!-- journal entries, previous entries -->
//     <!-- largest flexbox -->
//     <div class="journalField">
//         <h4>Journal Entry</h4>
//         <!-- journal entry text field -->
//             <textarea id="journalField" name="journalField" rows="14" cols="75">
//             ${editObj.entry}
//               </textarea>
//             </form><br>
//             <button id="saveEntry">Save Entry</button>
//     </div>
//     <div class="prevEntries">
//         <h4>Previous Entries</h4>
//         <div class="select" id="select">
//         </div>
//         <div class="prevEntries__scroll">
//         </div>
//     </div>
// </article>
//     `
// }