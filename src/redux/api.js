import axios from "axios";

/*
  !!Warning!!
  Client Id Token should normally be in .env file

  BUT Now.sh is giving a hard time and refuses to pass this variable to the application

  This is key feature, and unsplash API is free, so I am letting this token being hard coded for the moment
*/

async function fetchImages(page) {
  console.log("token", process.env);
  try {
    const { data } = await axios({
      method: "get",
      url: `https://api.unsplash.com/photos?page=${page}`,

      headers: {
        Authorization:
          "Client-ID 475cc02ca6cdb611f7917f6764c9b9ca223a41dc175e9e7ea7ea61e1cb610646"
      }
    });

    return data;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export default fetchImages;
