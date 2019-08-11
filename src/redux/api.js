import axios from "axios";

async function fetchImages(page) {
  console.log("token", process.env);
  try {
    const { data } = await axios({
      method: "get",
      url: `https://api.unsplash.com/photos?page=${page}`,

      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_TOKEN}`
      }
    });

    return data;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export default fetchImages;
