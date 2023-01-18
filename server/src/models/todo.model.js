import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema ({
    text: {
        type: String,
        required: [true, 'The todo text field is required']
    },
    isCompleted: {
        typle: Boolean,
        default: false
    }
})

export default mongoose.model('Todo', TodoSchema)