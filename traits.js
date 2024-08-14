const randomElement = (list) => {
  const _random = Math.floor(Math.random() * list.length);
  return list[_random];
};

const getBackground = () => {
  return randomElement(["Sky01", "Sky02", "Sky03", "Sky04", "Sky05"]);
};

const getBodyAndHead = () => {
  return randomElement(["Female"]);
};

const getHead = () => {
  return randomElement([
    "Angry",
    "Default",
    "Frown",
    "Happy2",
    "Surprise",
    "Angry_Female",
    "Default_Female",
    "Frown_Female",
    "Happy2_Female",
    "Surprise_Female",
  ]);
};

const getWeapon = () => {
  return randomElement([
    "A",
    "B",
    "C",
    "D",
    "E",
    "A_Female",
    "B_Female",
    "C_Female",
    "D_Female",
    "E_Female",
  ]);
};

const getSPR = () => {
  return randomElement(["A", "B", "C"]);
};

const getOther = () => {
  return randomElement(["A", "B", "C", "D"]);
};

const getHairstyle = () => {
  return randomElement(["A", "B", "C", "D"]);
};

module.exports = {
  getBodyAndHead,
  getBackground,
  getHairstyle,
  getWeapon,
  getOther,
  getHead,
  getSPR,
};
