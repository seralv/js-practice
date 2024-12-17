const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  genres: ["Sci-Fi", "Action", "Thriller"],
};

const {
  title,
  director,
  genres: [firstGenre],
} = movie;

console.log(
  `${title}, directed by ${director}, belongs to the ${firstGenre} genre.`,
);
