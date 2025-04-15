import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', async function (next) {
  const user = this
  if (!user.isModified('password')) {
    return next()
  }
  try {
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(user.password, saltRounds)
    user.password = hashedPassword
    next()
  } catch (err) {
    return next(err)
  }
})
const User = mongoose.model('User', userSchema)

export default User
