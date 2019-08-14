'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')

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

  // const comments = await Promise.all([
  //   Comment.create({
  //     content: `Ribalta has delicious gluten free dough AND vegan cheese options.  It's my favorite pizza place!`,
  //     upvotes: 156,
  //     restaurantId: 1,
  //     userId: 2
  //   }),
  //   Comment.create({
  //     content:
  //       'Order the corn shell tacos without onions, pico del gallo, and black beans.  Hold the cheese if you are sensitive to dairy.',
  //     upvotes: 2,
  //     restaurantId: 3,
  //     userId: 1
  //   })
  // ])

  console.log(`seeded ${users.length} users`)
  // console.log(`seeded ${comments.length} comments`)
  console.log(`seeded successfully`)
}

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

if (module === require.main) {
  runSeed()
}

module.exports = seed
