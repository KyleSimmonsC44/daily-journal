export const MoodFilter = (allMoods) => {
    return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${
                allMoods.map(
                    (mood) => {
                        return `<input type="radio" id="moodSelect" name="moodFilter" value="${ mood.id }"/>
                        <label for="moodFilter--${mood.label}">${ mood.label }</label>
                        `
                    }
                ).join("")
            }
            <input type="radio" name="moodFilter" value="Show All"/>
            <label for="moodFilter--Reset">Show All</label>
        </fieldset>
        `
}