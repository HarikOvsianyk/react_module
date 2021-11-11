export const IMAGE_API = "https://image.tmdb.org/t/p/w500/";

export const getImag = (imagePath) => {
  return `${IMAGE_API}/${imagePath}`;
};
