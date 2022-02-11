import axios from "axios";

async function getPastebinData(pasteId) {
  const pasteUrl = `https://pastebin.com/raw/${pasteId}`;
  let data;

  try {
    const res = await axios.get(pasteUrl);
    data = res.data;
  } catch (err) {
    console.log("BAD REQUEST");
    process.exit(1);
  }
  return data;
}

function parseData(dataString) {
  const dataArray = dataString.split(/\s+/g);
}

const str = await getPastebinData("CGNPPddA");
console.log(str);
parseData(str);
