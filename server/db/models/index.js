const User = require('./user')
const Comment = require('./comments')

Comment.belongsTo(User)
User.hasMany(Comment)

module.exports = {
  User,
  Comment
}
