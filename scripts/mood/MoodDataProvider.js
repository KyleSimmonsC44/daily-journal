let mood = []

export const useMood = () =>{
    return mood.slice()
}

export const getMood= () =>{
    return fetch("http://localhost:8088/moods")
    .then(response => response.json())
    .then(
        parsedMoods =>{
            mood = parsedMoods
        }
    )
}