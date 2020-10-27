import {saveEntries} from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".container")

const eventHub = document.querySelector(".container")

const render = () =>{
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
    </div>
    <div class="mood">
        <h4>Mood</h4>
        <!-- drop down menu for moods -->
        <select name="mood" id="mood">
            <option class="dropdown" value="happy">Happy!</option>
            <option class="dropdown" value="content">Content</option>
            <option class="dropdown" value="meh">meh.</option>
            <option class="dropdown" value="frustrated">frustrated.</option>
            <option class="dropdown" value="angry">&!#$@!%!#*#</option>
        </select>
    </div>
</article>
<article class="containerMiddle">
    <!-- journal entries, previous entries -->
    <!-- largest flexbox -->
    <div class="journalField">
        <h4>Journal Entry</h4>
        <!-- journal entry text field -->
        <form action="/action_page.php">
            <textarea id="journalField" name="journalField" rows="14" cols="75">
              </textarea>
            </form><br>
            <button id="saveEntry">Save Entry</button>
    </div>
    <div class="prevEntries">
        <h4>Previous Entries</h4>
        <div class="prevEntries__scroll"
        </div>
    </div>
</article>
<article class="containerBottom">
<!-- github link, @copyright -->
    <div class="github">
        <a href="https://github.com/KyleSimmonsC44">Check my GitHub</a>
    </div>
    <div class="copyright">
        <p>©Copyright Kyle Simmons</p>
    </div>

    `
}

eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "saveEntry"){
        const dateOfEntry = document.querySelector("#date").value
        const concept = document.querySelector("#conceptCovered").value
        const entry = document.querySelector("#journalField").value
        const mood = document.querySelector("#mood").value

        const newEntry = {
            dateOfEntry,
            concept,
            entry,
            mood
        }
        saveEntries(newEntry)
    }
})

export const EntryForm = () =>{
    render()
}
eventHub.addEventListener("entriesStateChanged", () =>EntryForm())