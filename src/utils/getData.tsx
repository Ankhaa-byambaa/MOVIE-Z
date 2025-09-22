import { instance } from "./axios";
export const getMoviesList = async (listName: string) => {
    const { data } = await instance.get(
      `movie/${listName}?language=en-US&page=1`
    );
    return data;
  };
  
  export const getSearchedMovies = async (searchValue: string) => {
    const res = await instance.get(
      `search/movie?query=${searchValue}&language=en-US&page=${1}`
    );
    return res.data;
  };
  export const getMovieGenres = async () => {
    const res = await instance.get(`genre/movie/list?language=en`);
    return res.data;
  };
  export const getMoviesByGenreId = async (genreIds: string, page: string) => {
    const res = await instance.get(
      `discover/movie?language=en&with_genres=${genreIds}&page=${page}`
    );
    return res.data;
  };