import mongoose from 'mongoose'
import { Todo } from '../types/Todo'
const { Schema } = mongoose

const todoSchema = new Schema<Todo>({
  title: {
    type: String,
    required: true
  }
})

export const TodoModel = mongoose.model('Todo', todoSchema)