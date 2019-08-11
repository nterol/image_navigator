import axios from "axios";

async function fetchImages(page) {
  console.log(process.env.REACT_APP_ACCESS_TOKEN);
  try {
    const { data } = await axios({
      method: "get",
      url: `https://api.unsplash.com/photos?page=${page}`,

      headers: {
        Authorization: `Client-ID 475cc02ca6cdb611f7917f6764c9b9ca223a41dc175e9e7ea7ea61e1cb610646`
      }
    });

    return data;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export default fetchImages;
