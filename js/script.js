const foods=[

{
name:"しわしわのデコポン",
setumei:"あまくておいしい",
image:"images/images_dekopon.jpg"
},

{
name:"まだサクサクのフジリンゴ",
setumei:"もさもさになる前に食べなきゃ",
image:"images/images_apple.jpg"
},

{
name:"そろそろ怪しいイチゴ",
setumei:"ぜんぜん甘くなかった",
image:"images/images_ichugo.jpg"
},

{
name:"愛媛県産ブラッドオレンジ",
setumei:"剝きかけて、間違えたと悟った",
image:"images/images_oranges.jpg"
},

{
name:"なんとかって名前の青リンゴ",
setumei:"大きくておいしそう",
image:"images/images_greenapple.jpg"
},

{
name:"濃厚そうなピーナッツバター",
setumei:"ピーナッツオイルでできてるよ",
image:"images/images_pbutter.jpg"
},

{
name:"なにに乗せてもおいしいやつ",
setumei:"ただしとってもクサくなる",
image:"images/images_garic.jpg"
},

{
name:"お気に入りのジャム",
setumei:"クランベリーかな？",
image:"images/images_jam.jpg"
},

{
name:"かるかん",
setumei:"鹿児島銘菓、やまいもが入ってるって",
image:"images/images_karukan.jpg"
},

{
name:"期限ぎりぎりのがんも",
setumei:"はやく食べなきゃ",
image:"images/images_ganmo.jpg"
}
];

let cart=[];

function getGreeting(){

const hour=new Date().getHours();

if(hour>=0 && hour<=4){

return "🌙 深夜の冷蔵庫へようこそ。夜食ですか？";

}

return "🧊 うるとらんちの冷蔵庫";

}

function openFridge(){

playFridgeSound();
fridgeLight();

const fridge=document.getElementById("fridge");

fridge.innerHTML="";

foods.forEach(food=>{

const div=document.createElement("div");

div.className="item";

div.innerHTML=`

<img src="${food.image}" class="foodImage">

<h3>${food.name}</h3>

<p>${food.setumei}</p>

<button onclick="addToCart('${food.name}')">取り出す</button>

<button onclick="fortune()">つつく</button>

`;

fridge.appendChild(div);

});

}

function addToCart(name){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(name);

localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " を取り出した");

}

function fortune(){

const results=[

"まだいけそう",
"くさりかけてる？",
"これ食べたかったんだよね",
"太るかな",
"食べちゃおうよ"

];

const r=Math.floor(Math.random()*results.length);

alert(results[r]);

}

function playFridgeSound(){

const sound=document.getElementById("fridgeSound");

sound.currentTime=0;
sound.play();

}

function fridgeLight(){

document.body.classList.add("flash");

setTimeout(()=>{

document.body.classList.remove("flash");

},500);

}

document.addEventListener("DOMContentLoaded",()=>{

const title=document.getElementById("title");

if(title){

title.innerText=getGreeting();

}

});

window.addEventListener("load", () => {

const light = document.getElementById("fridgeLight")

light.style.opacity = 0.9

setTimeout(() => {
  light.style.opacity = 0
}, 200)

})
