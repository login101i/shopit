
const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Proszę wprowadź nazwę produktu'],
        trim: true,
        maxlength: [100, 'Proszę wprowadź max 100 znaków']
    },
    price: {
        type: Number,
        required: [true, 'Proszę wprowadź nazwę produktu'],
        maxlength: [5, 'Proszę wprowadź max 5 cyft'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Proszę wprowadź opis produktu'],
    },
    ratings: {
        type: Number,
        default: 0,

    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Proszę wprowadź kategorię dla tego produktu'],
        enum: {
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                "Books",
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'Proszę wybierz poprawną kategorię dla produktu.'
        }
    },
    seller: {
        type: String,
        required: [true, 'Proszę wybierz product seller']
    },
    stock: {
        type: Number,
        required: [true, "Proszę wybierz product stock"],
        maxlength: [5, 'Liczba produktu nie może przekroczyć pięciocufrowej liczby'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Product', productSchema)