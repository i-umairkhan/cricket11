const url = "https://cricket-live-scores4.p.rapidapi.com/api/matches/current";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ee675fc2e8msh8de50a5f61d1daep158c97jsn778e99411af2",
    "X-RapidAPI-Host": "cricket-live-scores4.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json.data.matches[0]));
