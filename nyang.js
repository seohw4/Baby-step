const player = {
  name: "yannggang",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;
console.log(player);

player.height = "short";
console.log(player);

player.points = player.points + 15;
console.log(player);
