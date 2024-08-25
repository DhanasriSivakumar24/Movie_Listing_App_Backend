const mongooese = require("mongoose");

const movieSchema = new mongooese.Schema({
  name: {
    type: String,
    unique:true,
    required: true,
    
  },
  description: {
    type: String,
    unique:true,
    required: true,
  },
  releaseDate: {
    type: Date,
    unique:true,
    required: true,
  },
  genre: {
    type: String,
    unique:true,
    required: false,
  },
  duration: {
    type: Number,
    unique:true,
    required: true,
  },
  rating: {
    type: Number,
    unique:true,
    required: true,
  },
});

const Movie = mongooese.model("Movie", movieSchema);

module.exports = Movie;