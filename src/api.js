const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "aac407a4a3eecadfef727d77c108cd5c",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  notFoundImg: require("./assets/not_found.jpg"),
  noPoster: "https://www.movienewz.com/img/films/poster-holder.jpg",
  noFound: require("./assets/movies-gif.gif"),
};

export default apiConfig;
