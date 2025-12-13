import axios from 'axios';

export const getCityWeather = async ({request}) => {
  
  const url = new URL(request.url);

  const city = url.searchParams.get("city") || "zaporizhzhya"; 

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b3ea3946cd08306b75c8e73b04e6a794`
  );
  return response.data;
};