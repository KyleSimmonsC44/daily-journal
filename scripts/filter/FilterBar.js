import { getMood, useMood } from "../mood/MoodDataProvider.js"
import { MoodFilter } from "./MoodFilter.js"

/*
 You need to make a new HTML element with a class of
 `filters` in index.html
*/



export const FilterBar = () => {
    const render = () => {
        getMood()
        .then(()=>{
            const mood = useMood()
            
            const contentTarget = document.querySelector(".select")
            contentTarget.innerHTML = `
            ${MoodFilter(mood)}
            `
        })
    }

    render()
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event =>{
    if (event.target.name === "moodFilter"){
        const customEvent = new CustomEvent("moodFilter", {
            detail:{
                moodId: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
        console.log(customEvent.detail.moodId)
    }
})