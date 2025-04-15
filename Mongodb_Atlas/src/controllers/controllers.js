import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/models.js'

import { validationResult } from 'express-validator'
import { customResponse, validationFunction } from '../utils/bulidingFn.js'

const getUser = async (req, res) => {
  try {
    const users = await User.find({})
    const response = customResponse(
      200,
      'Users retrieved successfully!',
      req.path,
      users
    )
    return res.status(200).json(response)
  } catch (error) {
    const response = customResponse(
      500,
      'Server error while retrieving users',
      req.path,
      error.message
    )
    return res.status(500).json(response)
  }
}

const createUser = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    const firstError = errors.array()[0]
    const response = validationFunction(firstError.msg, req.path)
    return res.status(response.statusCode).json(response)
  }

  try {
    const body = req.body
    const newUser = new User(body)
    await newUser.save()

    const response = customResponse(201, 'User created successfully!', req.path)
    return res.status(201).json(response)
  } catch (error) {
    const response = customResponse(
      500,
      'Server error while creating user',
      req.path,
      error.message
    )
    return res.status(500).json(response)
  }
}

const loggedInUser = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    const firstError = errors.array()[0]
    const response = validationFunction(firstError.msg, req.path)
    return res.status(response.statusCode).json(response)
  }

  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      const response = customResponse(400, 'Invalid credentials!', req.path)
      return res.status(400).json(response)
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRATE_KEY,
      { expiresIn: '1h' }
    )

    const response = customResponse(200, 'Login successful', req.path, {
      token
    })
    return res.status(200).json(response)
  } catch (error) {
    const response = customResponse(
      500,
      'Server error during login',
      req.path,
      error.message
    )
    return res.status(500).json(response)
  }
}

export { getUser, createUser, loggedInUser }