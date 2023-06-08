const baseSrc =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const container = document.querySelector("#sprites");
for (let i = 1; i <= 151; i++) {
  const sprite = document.createElement("div");
  sprite.classList.add("sprite");
  container.insertAdjacentElement("beforeend", sprite);
  const spriteImg = document.createElement("img");
  spriteImg.src = `${baseSrc}${i}.png`;
  sprite.insertAdjacentElement("beforeend", spriteImg);
  const spriteNum = document.createElement("p");
  spriteNum.append(`#${i}`);
  sprite.insertAdjacentElement("beforeend", spriteNum);
}
