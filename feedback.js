const doc=document
const formel=doc.forms.feedback
const name=formel.elements.name
const email=formel.email
const radio=formel.elements.radio
const radioArray= [...radio]
const radioId=doc.querySelector('#radio-id')
const checkbox=formel.checkbox
const checkboxArray=[checkbox]
const comment=formel.comment
const btn=formel.btn
const select= formel.elements.select
// console.log(btn);
name.focus()
// name.blur()
name.addEventListener("copy",()=>{alert("you cant copy the values")})
name.addEventListener('input',(e)=> {console.log(e.target.value)
    doc.getElementById('res').innerText=e.target.value
}
)
formel.addEventListener("submit",(e)=>{
    e.preventDefault()
//     // console.log(`name: ${name.value} email : ${email.value} radio: ${radio.value} check : ${checkbox.value} 
//     // comment; ${comment.value}`);
console.log(name.value);
const data= [...new FormData(formel).entries()]
    // console.log(data);
    const query=data.map(([key,value])=>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    ).join('&')
    console.log(query);
//     console.log("form submitted");
const url=new URLSearchParams(data)
// console.log(url.toString());
const json=JSON.stringify(Object.fromEntries(data))
console.log(json);
// let xhr=new XMLHttpRequest()
// xhr.open('GET','https://reqres.in/api/users/2',true)
// xhr.onload=()=>{
//     let obj = JSON.parse(xhr.responseText)
//     console.log(xhr.responseText);
//     doc.getElementById("res").innerText=obj.data.first_name
// }
// xhr.send()
fetch('https://reqres.in/api/users/2',{
    method:'POST',
    body:new FormData(formel)
})

})

//  -------------form data --------------------------------------------
// formel.addEventListener('formdata',(e)=>{
// let a=e.formData
// console.log(...a.entries());
// console.log("form fired");
// })
// ----------------------------change button color----------------------------


btn.addEventListener('mouseenter',(e)=>{
    console.log(e);
   btn.style.backgroundColor = "red";
   btn.style.color='yellow'
})
btn.addEventListener('mouseleave',(e)=>{
    console.log(e);
   btn.style.backgroundColor = "green";
   btn.style.color='white'
})
btn.addEventListener('click',(e)=>{
    console.log(e);
   btn.style.backgroundColor = "orange";
   btn.style.color='blue'
})
//  ---------------------------handeling radio --------------------------------
console.log();
radioArray.forEach((c)=>{
    // console.log(c.checked);
})

radioId.addEventListener('change',(e)=>{
    const checked =radioArray.find(e=> {return e.checked})
// console.log("checked :",checked.value);
// console.log("checked :",e.target.value);

alert(`thank you for ${e.target.value} `)
})

// -----------------------------handeling checkbox--------------------------

// console.log(checkbox);

// checkboxArray.addEventListener('change',(e)=>{
//     console.log(e.target);
// })

// console.log(window.innerWidth);

document.addEventListener('DOMContentLoaded', function() {
    // Code to initialize the script goes here
    height=window.innerHeight
    Width=window.innerWidth
    // console.log('height : ',height);
    // console.log('width :',Width);
    doc.body.style.height=height+'px'
    console.log( doc.body.style.height);
  });
  

window.addEventListener('resize',()=>{
    height=window.innerHeight
    Width=window.innerWidth
    // console.log('height : ',height);
    // console.log('width :',Width);
    doc.body.style.height=height+'px'
    console.log( doc.body.style.height);

})

// --------------------------------select tag---------------------------------------
// select.value='IND'
// console.log(select.options.selectedIndex);
select.addEventListener("change",(e)=>{
    console.log("changed :",e.target.options[e.target.selectedIndex].value);
})

const option=doc.createElement('option')
option.value='NYZ'
option.innerText="New zealand"

select.add(option,2)