import { Schema, model } from 'mongoose';

const imageSchema = new Schema({
    image: {
        type: String, // URL or path to the image
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        enum: [], // Example types
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

export default model('Image', imageSchema);
