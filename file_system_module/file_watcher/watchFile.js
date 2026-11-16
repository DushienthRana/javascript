import fs from 'fs'

fs.watchFile("notes.txt", (curr, prev) => {

    console.log("Previous", prev)
    console.log("Current", curr)
    if (prev !== curr) {
        console.log("File has been modified")
})

