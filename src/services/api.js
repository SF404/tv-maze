import axios from 'axios';

export const getAllShows = async () => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=all`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };