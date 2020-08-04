const paragraph = document.querySelector("p").style.backgroundColor = "blue";
console.log(paragraph)

const header = document.querySelector("h1").style.fontSize = "5em";
console.log(header)


const text = document.querySelector("p").innerHTML = "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.";
console.log(text)

const transparent = document.querySelector("#item-13").style.opacity = "8";
console.log(transparent)

const hiTxt = document.querySelector("#item-3").innerHTML = "Hi!";
console.log(hiTxt)

function changeImage() {
  let change = document.querySelectorAll('img').forEach(function(item) {
    item.src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg";
    item.style.height = '300px'
  })
}
console.log(changeImage())
