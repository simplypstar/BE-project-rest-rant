const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let places = await db.Places.findOne({ name: 'H-Thai-ML' })

    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    // Add that comment to the place's comment array.
    places.comment.push(comment.id)

    //save the place now that it has comment
    await places.save()

    // Get the place, H-Thai-ML
    let places2 = await db.Places.findOne({ name: 'Coding Cat Cafe' })


    // Create a fake sample comment.
    let comment2 = await db.Comment.create({
        author: 'Traveling Bob',
        rant: true,
        stars: 1.0,
        content: 'The service was terrible and the food was even worse!'
    })

    // Add that comment to the place's comment array.
    places2.comment.push(comment2.id)

    //save the place now that it has comment
    await places2.save()
        
    // Exit the program
    process.exit()
}

seed()
