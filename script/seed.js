'use strict'

const db = require('../server/db')
const {User, Restaurant, Comment} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123',
      username: 'Cody'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123',
      username: 'Murphy'
    })
  ])

  const restaurants = await Promise.all([
    Restaurant.create({
      name: 'Ribalta',
      address: '48 E 12th St',
      city: 'New York',
      state: 'NY',
      zipcode: '10003',
      upvotes: 2686,
      cuisine: 'Italian'
    }),
    Restaurant.create({
      name: 'Senza Gluten',
      address: '206 Sullivan St',
      city: 'New York',
      state: 'NY',
      zipcode: '10012',
      cuisine: 'Italian'
    }),
    Restaurant.create({
      name: 'L.A. Burrito',
      address: '67 Wilson Ave',
      city: 'Brooklyn',
      state: 'NY',
      zipcode: '11237',
      cuisine: 'Mexican'
    })
  ])

  const comments = await Promise.all([
    Comment.create({
      content: `Ribalta has delicious gluten free dough AND vegan cheese options.  It's my favorite pizza place!`,
      upvotes: 156,
      restaurantId: 1,
      userId: 2
    }),
    Comment.create({
      content:
        'Order the corn shell tacos without onions, pico del gallo, and black beans.  Hold the cheese if you are sensitive to dairy.',
      upvotes: 2,
      restaurantId: 3,
      userId: 1
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${restaurants.length} restaurants`)
  console.log(`seeded ${comments.length} comments`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
