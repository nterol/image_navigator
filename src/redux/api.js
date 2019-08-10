import axios from "axios";

async function fetchImages() {
  try {
    const { data } = axios({
      method: "get",
      url: "https://api.unsplash.com/photos",
      headers: {
        Authorization: `Clint-ID ${process.env.REACT_APP_ACCESS_TOKEN}`
      }
    });
    return data;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export default fetchImages;
