require("dotenv").config();
const Jimp = require("jimp");
const fs = require("fs");
// const pinataSDK = require("@pinata/sdk");
// const pinata = pinataSDK(process.env.PINATA_KEY, process.env.PINATA_API_SECRET);
const Traits = require("./traits");

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const build = async (index, onComplete) => {
  const _path = "D:/PROJECTS/TraitsGenerator/traits-gen";
  var _traits = [];

  const background = Traits.getBackground();
  const backgroundJimp = await Jimp.read(
    _path + "/ME_Export/Turkish/Background/Background_" + background + ".png"
  );
  _traits.push({
    trait_type: "Background",
    value: background,
  });

  const weapon = Traits.getWeapon();
  const weaponJimp = await Jimp.read(
    _path + "/ME_Export/Turkish/Weapon/Weapon_" + weapon + ".png"
  );
  _traits.push({
    trait_type: "Weapon",
    value: weapon,
  });

  const head = Traits.getHead();
  const headJimp = await Jimp.read(
    _path + "/ME_Export/Turkish/Expression/Expression_" + head + ".png"
  );
  _traits.push({
    trait_type: "Head",
    value: head,
  });

  const hairStyle = Traits.getHairstyle();
  const hairStyleJimp = await Jimp.read(
    _path + "/ME_Export/Turkish/Hairstyle/hair_" + hairStyle + ".png"
  );
  _traits.push({
    trait_type: "hairStyle",
    value: hairStyle,
  });

  const bodyAndHead = Traits.getBodyAndHead();
  const bodyJimp = await Jimp.read(
    _path +
      "/ME_Export/Turkish/Character Base/Character_" +
      bodyAndHead +
      ".png"
  );
  _traits.push({
    trait_type: "Body",
    value: bodyAndHead,
  });

  const armor = Traits.getOther();
  const armorJimp = await Jimp.read(
    _path + "/ME_Export/Turkish/Armor/Armor_" + armor + ".png"
  );
  _traits.push({
    trait_type: "Armor",
    value: armor,
  });

  const accessory = Traits.getOther();
  const accessoryJimp = await Jimp.read(
    _path + "/ME_Export/Turkish/Accessory/Accessory_" + accessory + ".png"
  );
  _traits.push({
    trait_type: "Accessory",
    value: armor,
  });

  const cloak = Traits.getOther();
  const cloakJimp = await Jimp.read(
    _path + "/ME_Export/Turkish/Cloak/Cloak_" + cloak + ".png"
  );
  _traits.push({
    trait_type: "cloak",
    value: cloak,
  });

  const spr = Traits.getSPR();
  const sprJimp = await Jimp.read(
    _path + "/ME_Export/Turkish/Shld Pad R/spr_" + spr + ".png"
  );
  _traits.push({
    trait_type: "Shoulder Pad Right",
    value: spr,
  });

  const spl = Traits.getOther();
  const splJimp = await Jimp.read(
    _path + "/ME_Export/Turkish/Shlder Pad L/spl_" + spl + ".png"
  );
  _traits.push({
    trait_type: "Shoulder Pad Left",
    value: spl,
  });

  var _composedImage = backgroundJimp;
  _composedImage.blit(bodyJimp, 0, 0);
  _composedImage.blit(armorJimp, 0, 0);
  _composedImage.blit(weaponJimp, 0, 0);
  _composedImage.blit(headJimp, 0, 0);
  _composedImage.blit(hairStyleJimp, 0, 0);
  _composedImage.blit(accessoryJimp, 0, 0);
  _composedImage.blit(cloakJimp, 0, 0);
  _composedImage.blit(sprJimp, 0, 0);
  _composedImage.blit(splJimp, 0, 0);

  await _composedImage.write(`Output/${index}/` + index + ".png");
  await sleep(10); //We give some time for the image to be actually saved in our files
  // const _readableStream = await fs.createReadStream(
  //   _path + "/Output/images/" + index + ".png"
  // );
  // const _ipfs = await pinata.pinFileToIPFS(_readableStream);

  await fs.writeFileSync(
    `Output/${index}/` + `${index}.json`,
    JSON.stringify({
      name: "NFT #" + index,
      traits: _traits,
      image: "",
    })
  );

  onComplete();
};

module.exports = {
  build,
};
