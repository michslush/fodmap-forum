const User = require('./user')
const Comment = require('./comments')
const Places = require('./places')

Comment.belongsTo(User)
User.hasMany(Comment)

Places.belongsTo(User)
User.hasMany(Places)

module.exports = {
  User,
  Comment,
  Places
}
