//iife
(() => {
  let ab = 45;
  let aa = 55;
  let res = aa + ab;
  console.log("iife", res);
})();

let name = "kaathir";
let age = 14;
let val = ["45", "interest", "next"];
let address = {
  city: "pondicherry",
  location: "thengaitittu",
  Clg: "mit",
};
let person = {
  name: "nandha",
  age: 27,
  val: ["45", "interest", "next"],
  address: {
    city: "pondicherry",
    location: "city",
    Clg: "mit",
  },
  greet: function (role) {
    let msg = `my name is ${person.name} and i am from ${person.address.city} and my age is ${person.age} and net worth is ${person.val[0]} $ my role is ${role} `;
    console.log(msg);
    alert(msg);
  },
};

let greet = (role) => {
  let msg = `my name is ${person.name} and i am from ${person.address.city} and my age is ${person.age} and net worth is ${person.val[0]} $ my role is ${role} `;
  console.log(msg);
  alert(msg);
  return msg;
};
// console.log("this is ",greet("kat"));
console.log(2 == 2);
let a = "int";
console.log("int" == a);

//             age logic
// let type = age > 18 ? "adult ":"child"
// console.log(type);
// console.log("logic -",!false);

//                       cibil logic
// let check= null

let amount = (income, cibil = 900) => {
  const elegibleinc = 20000;

  const elecibil = 800;

  let money = income > elegibleinc ? true : false;
  let cap = cibil > elecibil ? true : false;
  let ans = money && cap ? "elegible" : "not elegible";

  console.log("you are ", ans);
  console.log(repeat(ans));
};

function repeat(ans) {
  if (ans === "elegible") {
    check = "get ready for checking";
    return check;
  } else {
    check = "come after sometime";
    return check;
  }
}

// hours
let s = new Date().getHours();
let hours = (s) => {
  if (s <= 24) {
    if (s >= 0 && s <= 12) console.log("good morning and time is " + s + "AM");
    else if (s > 12 && s < 18)
      console.log("good afternoon and time is " + (s - 12) + "PM");
    else console.log("gud evening and time is " + (s - 12) + "PM");
  } else console.log("enter valid time");
};
hours(s);

// marks and result

let marks = (mark) => {
  switch (true) {
    case mark > 90 && mark <= 100:
      console.log(`${mark} it is distinction`);
      break;
    case mark <= 90 && mark > 75:
      console.log(`${mark} it is good`);
      break;
    case mark <= 75 && mark > 50:
      console.log(`${mark} it is average`);
      break;
    case mark <= 50 && mark >= 35:
      console.log(`${mark} it is below average`);
      break;
    case mark < 35 && mark >= 0:
      console.log(`${mark} it is below average`);
      break;
    default:
      console.log("enter valid marks");
  }
};
// for loop
for (i = 1; i <= 10; i++) {
  // console.log( "2" +"*"+ i +"="+2*i);
}

//while loop

let j = 1;
while (j <= 15) {
  // console.log(j);
  j++;
}

// do while
k = 20;
do {
  if (k > 10) {
    // console.log("dowhile"+k);
  }
  k--;
} while (k <= 10);

//for in

for (let k in address) {
  // console.log(k );
}
console.log("-----------------------");
for (let k of Object.values(address)) {
  // console.log(k );
}
val.a = "new";
for (let v in val) {
  // console.log(v);
}

//factory functions

function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      let msg = ` my name is ${this.name} and of age ${this.age}`;
      alert(msg);
    },
  };
}
let about = createPerson("kathir", 26);
// about.greet()

// constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = () => {
    console.log(`my name is ${this.name} and of age ${this.age}`);
  };
}
let ans = new Person("kathir", 26);
// ans.greet()

// primitive vs referenece data type

let m = { val: 10 };

let n = m;
m.val = 20;

let cart = { val: 5 };
let updatecart = (cart) => {
  cart.val++;
  return cart;
};
// console.log(updatecart(cart));

// console.log(cart);

// cloning js object

// let another =Object.assign({hi:"new"},address)
// let all={...address}
// for(let k in address){
//     another[k]=address[k]
//     console.log(k,"in",address[k]);
// }
// console.log("another :",another);
// console.log("********************");
// console.log(all);

//math object
for (let i = 0; i < 10; i++) {
  // console.log( Math.ceil((Math.random()*100)));
}

//string object

let one = "hiaa";
let two = new String("pks");
// console.log(two);

//date object

const date = Date().toString();
const rr = "this is string";
// console.log(date[0]);
// console.log(address);

// summa'
let arr = [1, 3, 6, 8, 2];
// console.log(arr);
let emp = [];
let p;
let o;
// console.log("len :",arr.length);
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  for (let j = 0; j < arr.length; j++) {
    //   console.log("out",i ,j,arr[i]+arr[j]);
    if (i == j) {
      k = 0;
      // console.log("if",i,j,k);
    } else {
      let k = arr[i] + arr[j];
      let l = arr[i];
      // console.log(i,j+1,"add",k);
      p = k;
      o = l;
    }

    // console.log("ins",l);

    for (let q = 0; q < arr.length; q++) {
      if (p === arr[q]) {
        // console.log(p);
        // console.log(o);
        emp.push(p);
        // console.log("emp",emp);
      }
    }
  }
}

// array insert element
// console.log(arr);
// arr.unshift(1,2,3)
// console.log(arr);
// arr.push(5,4,3)
// console.log(arr);

arr.splice(3, 0, 9, 9);
// console.log(arr);

//array find()
const inventory = [
  { id: 1, name: "apples", quantity: 21 },
  { id: 2, name: "bananas", quantity: 10 },
  { id: 3, name: "cherries", quantity: 45 },
];
let qty = inventory.reduce((a, b) => {
  return a + b.quantity;
}, 0);
//   console.log(qty);

let def = inventory.findIndex((inv) => inv.name === "bananas");
console.log(def);

//removing an element in js array
let numbers = [45, 891, 2, 6, 7, 9, 5];
//    let eve=numbers.pop()
//    numbers.shift()
//    console.log(numbers);
//    console.log(eve);

//empty js array
//sol 1
//  numbers=[]
//sol2
// numbers.length=0
// sol 3
// numbers.splice(0,numbers.length)
// sol 4

// while(numbers.length)numbers.pop()
// console.log(numbers);

//combining extarat in js
const shoppingcart = ["maggi", "masala", "veggi"];
const addcart = ["stove", "utensils"];
const newrecipe = shoppingcart.concat(addcart);
// console.log(newrecipe);
// for-Of
for (let cart of shoppingcart) {
  // console.log(cart);
}
// for in
for (let cart in shoppingcart) {
  // console.log(shoppingcart[cart]);
}
// for each
shoppingcart.forEach((r, i) => console.log(i, r));
//join
// console.log(shoppingcart.join("'s "));
let sent = "this  will    never   change";
//split

let split = sent.split(" ");
for (let check of split.entries()) {
  // console.log(check[0],check[1]);
  if (check[1] === "") {
    // console.log("caught",check[0]);
    split.splice(check[0], 1);
  }
}

// console.log(split);
let newjoin = split;
// console.log(newjoin);
for (let sec of newjoin.entries()) {
  // console.log(sec);
  if (sec[1] === "") {
    // console.log("caught",sec[0]);
    newjoin.splice(sec[0], 1);
  }
}
// console.log(newjoin);
// console.log(numbers);
// console.log(numbers.sort((a,b)=> {return a-b} ));
// console.log(numbers.sort().reverse());
let ass = numbers.some((a, b) => {
  return a < 0;
});
// console.log(ass);
let even = numbers.filter((v) => {
  return v % 2 == 0;
});
let odd = numbers.filter((v) => {
  return v % 2 != 0;
});
// console.log(even);
// console.log(odd);
let mul = numbers.map((v, k, l) => {
  return v * 2;
});
// console.log(mul);
let list = [
  { id: 1, name: "kathir", initial: "p" },
  { id: 2, name: "nandha", initial: "a" },
  { id: 3, name: "alice", initial: "d" },
];
let fullname = list.map((v) => {
  let ans = [v.name, v.initial].join(" ");
  let obj = { id: v.id, ans };
  return obj;
});
// console.log(fullname);

// console.log(inventory.sort((u,v)=>{return u.quantity - v.quantity}).filter(v=>{return v.quantity < 25}).map(v=>{return v.quantity *2}))

const don = [45, 98, 6, 57, 86, 566, 45];
const find = don.find((val) => val > 54);
// console.log(find);
const filter = don.filter((val) => val > 54);
// console.log(filter.sort((a,b)=>  b-a));
const map = don.map((a, b) => a * 2);
// console.log(map);

// let add= new Function(console.log(aa+ab));
//function arguments
// console.log(sumexpence())

//new work
// tiffen=12,lunch=30,petrol=50
// let tiffen = document.getElementById("total").value
// console.log(tiffen);

// let form = document.getElementById("myForm").value
// console.log(form);
// form.addEventListener('submit',(e)=>{
// e.preventDefault()
// let tiffen = document.getElementById("tiffen").values
// console.log(tiffen);
// let lunch = document.getElementById("lunch")
// let dinner = document.getElementById("dinner")
// let total = document.getElementById("total")
// })

let ad = (...arguments) => {
  //method 1
  let b = 0;

  for (let value of arguments) {
    b += value;
    // console.log("loop",b);
  }
  // return b
  // console.log("ans",bf+lunch+dinner+b);
  //method 2
  // return arguments.reduce((a,b)=> a+b)
};
let da = ad(50, 60, 40, 30, 20, 50);
// console.log(da)

let work = {
  role: "IT",
  office: "Resileo",
  get about() {
    return ` I am working as a ${this.role} software developer @ ${this.office}`;
  },
  set val(a) {
    if (typeof a != "string") {
      const err = Error("its not a string");
      throw err;
    } else if (a.length < 3) {
      const err = Error("length of name must be greater than 3");
      throw err;
    }
    let b = a.split(" ");
    (this.role = b[0]), (this.office = b[1]);
  },
};
try {
  //   work.val = "as";
} catch (error) {
  alert(error);
}

// console.log(work.about);

//scope

let global = () => {
  let user = "kathir";
  local(user);
};
let local = (m) => {
  // console.log(m);
};

global();

//var and let
var aa = "anss";
let bb = "aas";
let nam = () => {
  let aa = "and";
  var bb = "bb";
  // console.log(aa);
  // return bb
};
//  console.log(nam());

// this
let ofthis = {
  channel: "use this",
  lang: ["tamil", "telugu", "malayalam"],
  subscribe() {
    console.log(this);
  },
  langu() {
    let that = this;
    this.lang.forEach((a) => {
      console.log(that.channel, a);
    });
  },
};
// ofthis.langu();

function Share(channel) {
  (this.channel = channel), console.log(this);
}

const ved = new Share("varisu");
// dom
let doc = document;

// console.log(document.body.children[0].innerText = "neww ");
// console.log(document.body.children);

// dom properties and method

const obj = {
  name: "kathir",
  place: "pondicherry",
  info() {
    return `hi my name is ${this.name} and i am from ${this.place}`;
  },
};

// obj.name= prompt("what is your name ?")
// obj.place= prompt("where is your place?")
// console.log(obj.info());
// document.body.innerText = obj.info()

// alert("before")
// console.log(doc.body.constructor.name);
// console.log(doc.body instanceof HTMLHeadElement);

// document.addEventListener('DOMContentLoaded',()=>{
//   // console.log(doc.body.children[2].offsetWidth);
// })
// window.addEventListener('load',()=>{
//   // console.log(doc.body.children[2].offsetWidth);
// })
// console.log(doc.getElementById("user"));
// doc.body.children[0].innerText = "dai "

// select dom elements and ui building
// for(let i=0; i<=7;i++){
//   console.log(i,'-',doc.body.children[i]);
// }

//=======================================================================================================
//   let amt =0
//   //amount
//   let a=0
// // sum
// let parse=arrs.map(a=>parseInt(a))

// //---------------------------------------------------------------------------------
// for(let i=0;i<parse.length;i++){
//   a+=parse[i]
// }
// console.log("add",a);
// //---------------------------------------------------------------------------------
// if(total.value ==="total"){
//   amt=parseInt( res.value)
//  if(amt>0){
//   amt=amt*2
//   console.log("inside if",amt);
//   console.log("calculation",z=amt-a);
//   answer.innerHTML=z
//  }

const content = doc.getElementsByClassName("content");
const hei = content.offsetHeight;
console.log(hei);
document.addEventListener("DOMContentLoaded", function () {
  // Code to initialize the script goes here
  height = window.innerHeight;
  Width = window.innerWidth;
  // console.log('height : ',height);
  // console.log('width :',Width);
  // content.style.height=height+'px'
});

// ===========================================Dom ===================================================

// -------------------------------------------Basic selections --------------------------------------

arrs = [];

let totalamt = doc.getElementById("totalamt");
let total = doc.getElementById("item");
let res = doc.getElementById("amount");
let press = doc.getElementById("enter");

let elements = doc.getElementById("elements");
let lists = doc.getElementById("lists");
let answer = doc.getElementById("ans");
let value = doc.getElementById("val");
const loadimg = doc.getElementById("imgs");
const listNum = doc.getElementById("list-num");

//-------------------------------------dom create element ----------------------------------------------
doc.addEventListener("DOMContentLoaded", () => {
  const fetchedprice = [...JSON.parse(localStorage.getItem("price"))];
  const fetchedItem = [...JSON.parse(localStorage.getItem("item"))];
  const data = {};
  // fetchedprice.forEach(item=>
  // elements.innerHTML += `<li class="lists" onclick="removeItem(event)">${total.value}    -->   ${item.price}    ❌</li> `
  // )

  // fetchedItem.forEach(item=>
  // elements.innerHTML += `<li class="lists" onclick="removeItem(event)">${item.item}    -->   ${item.price}    ❌</li> `
  // )
  fetchedItem.forEach((item1, index) => {
    // console.log(item1);
    // console.log(index);

    data[item1['item']]=fetchedprice[index]["price"]
    // data[fetchedItem[index]['item']] = fetchedprice[index]['price'];
  });
  console.log(JSON.stringify(data));
  // console.log(data);
  const ent=Object.entries(data)
  console.log(ent);
  ent.forEach(i=>{
    elements.innerHTML += `<li class="lists" onclick="removeItem(event)">${i[0]}-->${i[1]}    ❌</li> `
  })
//   for( let i in ent){
// console.log(`${ent[i][0]} - ${ent[i][1]}`);
//   }
  // for( let [i ,j] of ent){
  //   console.log(`${i} - ${j}`);
  //     }
      refreshUI();
});

function aler() {
  addElementByDom();
}
console.time("normal way");
function addElementByDom() {
  let main = doc.getElementById("main");

  // const alertText=doc.createTextNode("Amount Updated !!!")
  const fragment = doc.createDocumentFragment();
  // for(let i=0;i<10000;i++){
  const div = doc.createElement("div");
  div.className = "alert";
  const btn = doc.createElement("button");
  btn.type = "button";
  const alertText = doc.createTextNode(`✅ Successful.... Amount Updated !!!`);
  const btntxt = doc.createTextNode("❌ close");

  div.setAttribute("onclick", "removeDiv(event)");

  btn.append(btntxt);
  div.append(alertText, btn);

  fragment.append(div);
  // }
  // console.dir(fragment);
  main.prepend(fragment);
}
console.timeEnd("normal way");
// ----------------------------------------remove alert-------------------------------------------
removeDiv = (e) => {
  console.log(e.currentTarget);
  let rem = e.currentTarget;

  rem.remove();
};

// --------------------------------------- Where program Starts-------------------------------------------

const addInputFoods = () => {
  console.log("you have been clicked");
  // console.log(total.value , res.value);

  elements.innerHTML += `<li class="lists" onclick="removeItem(event)">${total.value}-->${res.value}❌</li> `;
  console.dir(lists);
  elements.setAttribute;
  // console.log(elements.innerHTML);

  arrs.push(res.value);
  console.log(arrs);

  console.log("sum is:", sum());

  // set local storage
  localStorage.setItem(
    "price",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("price") || "[]"),
      { price: res.value },
    ])
  );
  localStorage.setItem(
    "item",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("item") || "[]"),
      { item: total.value },
    ])
  );
  total.value = "";
  res.value = "";
  refreshUI();
};

// ---------------------------------------------remove Items ---------------------------------

function removeItem(e) {
  // let del =e
  console.log(e.target.innerHTML);
  let rem = e.target;
  // console.log(tiffen);
  rem.remove();
  const fetchedprice = [...JSON.parse(localStorage.getItem("price"))];
  const fetchedItem = [...JSON.parse(localStorage.getItem("item"))];

  fetchedItem.forEach((i,j)=>{
    const val=`${i.item}--&gt;${fetchedprice[j]['price']}    ❌`
    console.log(val);
    if(val == e.target.innerHTML){
      console.log(i.item);
      console.log(fetchedprice[j]);
      console.log(fetchedItem.splice(fetchedItem.indexOf(i),1))
      console.log(fetchedprice.splice(j,1))
    }
  
  })
  localStorage.setItem('item',JSON.stringify(fetchedItem))
  localStorage.setItem('price',JSON.stringify(fetchedprice))

  refreshUI();
}

// remove image
function refreshUI() {
  listNum.innerText = `You have ${elements.children.length} items. `;
  // if(elements.children.length>0){
  // loadimg.hidden=true

  // }
  // else{
  //   loadimg.hidden=false
  // }
  elements.children.length > 0
    ? ((loadimg.hidden = true), (listNum.hidden = false))
    : ((loadimg.hidden = false), (listNum.hidden = true));
}
//  add item while pressed enter
res.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key == "Enter") {
    addInputFoods();
  }
});

try {
  press.addEventListener("click", addInputFoods);
} catch (error) {
  console.error("caught", error);
}
// --------------------------------------validation ---------------------------------------------
function success() {
  console.log("success works");
  if (res.value === "") {
    press.disabled = true;

    console.log("if works", press.disabled);
  } else {
    press.disabled = false;
    console.log("else works", press.disabled);
  }
}
// -------------------------------------calculation----------------------------------------------
function sum() {
  let parse = arrs.map((a) => parseInt(a));
  let z = 0;
  let a = 0;
  for (let i = 0; i < parse.length; i++) {
    z += parse[i];
    a = parseInt(z);
    console.log(a);
  }
  let amt = totalamt.value;
  b = parseInt(amt);
  value.innerHTML = b;
  console.log(b);
  console.log(a);
  let c = b - a;
  console.log(c);
  answer.innerHTML = c;
}

//--------------------------------------------------------------------------------------

let allFoods = [].map.call(lists, (food) => food.textContent);
console.log(allFoods);
// --------------------------------------add elements from Html---------------------------------

// main.insertAdjacentHTML('beforebegin',"success")
// main.insertAdjacentHTML('beforeend',"end")

// -----------------------------------------replace dome elements-------------------------------

// const food= doc.createElement("h1")
// food.textContent = "do u add food"
// food.id="changed"
// const tiffen = doc.querySelector("#elements :first-child")
// console.log(tiffen);
// tiffen.replaceWith(food)

// -------------------------------------clone Dom ----------------------------------------------------
const amt = doc.querySelector("#amt");
const tiffen = doc.querySelector("#elements :last-child");
const resync = doc.getElementById("resync");
// console.log(tiffen);

// console.log(clonedData);
const createDiv = doc.createElement("div");
const createul = doc.createElement("ul");

createDiv.append(createul);
amt.append(createDiv);

resync.addEventListener("click", () => {
  createul.innerHTML = "";
  const clonedData = tiffen.cloneNode(true);
  createul.append(clonedData);
  console.log("enter");
});

// --------------------------------------------Dom traversal-------------------------------------
const insertarr = [];
const select = doc.querySelector("#elements");
// console.log(select.children);
// for(let sel of select){

//   insertarr.push(sel.textContent)
// }
// console.log(insertarr);
// -------------------------------------------styles ------------------------------------------------
// console.log(totalamt.setAttribute("style","background-color: yellow"));
// console.log(window.getComputedStyle(lists));
//classname set
// console.log(elements);
elements.setAttribute("class", "newClassname");
elements.className += " classname2 classname3 classname4 ";
// console.log(elements.classList.add("class5"));
// console.log(elements.classList.toggle('class5'));
// console.log(elements.className);

// --------------------------------------class style manupulation --------------------------------

const newBtn = doc.querySelector("#btn");
const elem = doc.querySelector(".elem");

newBtn.addEventListener("click", () => {
  if (elem.classList.contains("hide")) {
    newBtn.innerText = "credits";
    elem.classList.remove("hide");
    console.log("if fired");
    console.log(elem.className);
  } else {
    elem.classList.add("hide");
    newBtn.innerText = "know more";

    console.log("else fired");
    console.log(elem.classList);
  }
});

function jbl() {
  // console.log(event);
  console.log(this);
}
// jbl=()=>{
//   console.log(this);
// }

// -----------------------------------------------remove eventListners----------------------------------

// newBtn.addEventListener("click",handel)
// function handel(){
//   console.log("event added");
// }

//   newBtn.removeEventListener("click",handel)

// -----------------------------------------------bubble-----------------------------------------------

const bubble = doc.querySelectorAll(".bubble,.bubble *");
for (let b in bubble) {
  // console.log(b);
}

// ----------------------------------event delegation-----------------------------------------------

const dele = doc.querySelectorAll(".dele li");
dele.forEach((li) => {
  li.addEventListener("click", () => {
    // console.log("clicked :", li.textContent);
  });
});
// console.log(dele);

// tablre

// const table = doc.querySelector("table");
// let selecttr;
// table.addEventListener("click", (e) => {
//   const t=e.target
//   const tr=t.closest("tr")
//   console.log(tr.innerText);

// if(selecttr!=undefined){
//   selecttr.classList.remove("active")
// }
// selecttr=tr
// alert(selecttr.children[0].innerText);
// selecttr.classList.add("active")
// });

// ----------------------------------------data Toggle and data set

doc.addEventListener("click", (e) => {
  const id = e.target.dataset.toggle;
  console.log(id);
  const el = doc.getElementById(id);
  el.hidden = !el.hidden;
});

// --------------------------------------mouse events ------------------------------------

doc.addEventListener("mousedown", (event) => {
  // console.log("mouse ",event);
  switch (event.which) {
    case 1:
      // console.log("left click");
      break;
    case 2:
      // console.log("middle click");
      break;
    case 3:
      // console.log("right click");
      break;
  }
});

// ------------------------------------------------------------keyboard events-------------------------------------------------

// doc.addEventListener("keydown",e=>console.log(e.key))
