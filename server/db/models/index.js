const User = require('./user')
const Comment = require('./comments')
const Places = require('./places')

Comment.belongsTo(User)
User.hasMany(Comment)

Places.belongsToMany(User, {through: 'my-places'})
User.hasMany(Places)

module.exports = {
  User,
  Comment,
  Places
}
