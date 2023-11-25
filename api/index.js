import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "-11.0095",
          tr_latitude: tr_lat ? tr_lat : "5.905",
          bl_longitude: bl_lng ? bl_lng : "94.771",
          tr_longitude: tr_lng ? tr_lng : "141.048",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key": "5d50c96a28msha2ba264d3a9dd7ep1c9208jsnff62489e1c41",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};

