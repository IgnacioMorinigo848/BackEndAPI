var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    _id: {type:Number, require:true},
    title: { type: String, required: true },
    release_date: { type: String, required: true },
    overview: { type: String, required: true },
    poster_path: { type: String, required: true },
    typeFilm: { type: String, require:true }
});

movieSchema.plugin(mongoosePaginate)
const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;
