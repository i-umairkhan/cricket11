const url = "https://cricket-live-scores4.p.rapidapi.com/api/matches/current";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ee675fc2e8msh8de50a5f61d1daep158c97jsn778e99411af2",
    "X-RapidAPI-Host": "cricket-live-scores4.p.rapidapi.com",
  },
};

let matches_data = {};

const getData = async () => {
  const reponse = await fetch(url, options);
  const data = await reponse.json();
  return data;
};

matches_data = await getData();

for (let i = 0; i < 10; i++) {
  let match = matches_data.data.matches[i];
  console.log("");
  console.log("STATUS = " + match.statusText);
  console.log("MATCH = " + match.slug);
  console.log("---------------------------");
}
