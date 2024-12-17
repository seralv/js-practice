const game = {
  name: "Legends of Valor",
  developer: "Epic Studio",
  releaseYear: 2022,
  characters: [
    {
      name: "Aria",
      class: "Mage",
      stats: {
        health: 100,
        mana: 200,
      },
    },
    {
      name: "Tharok",
      class: "Warrior",
      stats: {
        health: 150,
        mana: 50,
      },
    },
  ],
};

const {
  name: gameName,
  developer,
  characters: [
    {
      name: firstCharacterName,
      class: firstCharacterClass,
      stats: { mana: firstCharacterMana },
    },
    { name: secondCharacterName, class: secondCharacterClass },
  ],
} = game;

console.log(
  `${gameName}, developed by ${developer}, features ${firstCharacterName} (${firstCharacterClass}) and ${secondCharacterName} (${secondCharacterClass}). ${firstCharacterName} has ${firstCharacterMana} mana.`,
);
