let list = document.getElementsByClassName("list")[0];
let p = document.getElementById("id1");
let image = document.getElementById("image");
const url = "https://api.thecatapi.com/v1/images/search";
const output = async (url) => {
  const response = await fetch(url);
  await console.log(response.status);
  await console.log(response.ok);
  const data = await response.json();
  let id1 = data[0].id;
  let image = data[0].url;
  let width = data[0].width;
  let height = data[0].height;
  console.log(height, width);
  return { id1, image, width, height };
};
function operation() {
  output(url).then((result) => {
    p.innerText = "The id is " + result.id1;
    image.src = result.image;
    image.width = result.width;
    image.height = result.height;
  });
}
