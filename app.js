// ---------chapter#38-42-----------

// -----------Q1----------
// var theSum;
// addNumbers();
// function addNumbers(){
//     theSum = 5+7;
// }
// alert(theSum)

// ---------Q2----------
// leapYear();

// function leapYear(){
//     var y = prompt("Enter Year")
//     if((y % 100 != 0) && (y % 4 == 0)){
//         alert("leap Year")
//     }
//     else{
//         alert("Not Leapyear")
//     }
// }

// ------------Q3-----------
// var side1 = 2.65;
// var side2 = 5.78;
// var side3 = 9.87;
// traingle();
// function traingle(){
//     var s = (side1 + side2 + side3) / 2;
//     alert("area of the traingle is" + " " + s)
// }

// ----------Q4---------
// var sub1 = 75
// var sub2 = 80
// var sub3 = 89
// var obtMarks = 254

// function average(){
//     alert(average = (obtMarks/3))
// }

// function percent(){
//     alert(percent = (obtMarks/300)*100)
// }

// function main(){
//     average()
//     percent()
// }
// main()

// ----------Q5---------
// var text = "hello is world";

// function main(){
//     alert(text.indexOf("hello"));
// }
// main();

// --------Q6----------
// var string = "hello world is really fantastic";
// var vowel = ["a", "e", "i", "o", "u"];

// function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//             }

//         }
//     }
// }

// name()
// alert(string);

// ---------Q7-------------

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   alert(findOccurrences());

// --------Q8--------
// var a = prompt("enter distance 1")
// var b = prompt("enter distance 2")

// function meter(){
//     meter = (a+b) * 1000;
//     alert(meter)
// }
// function feet(){
//     feet =  (a+b)*3280.8;
//     alert(feet)
// }
// function inch(){
//     inch = (a+b)*39370.07;
//     alert(inch)
// }
// function cm(){
//     cm = (a+b)*100000;
//     alert(cm)
// }
// function main(){
//     meter()
//     feet()
//     inch()
//     cm()
// }
// main()

// --------Q9--------

// main()
// function main()
// {
//  var time,overtime=0,i;
//  var time = prompt("Enter the Hours for an employee worked above 40 hours");

//  i=1;
//  while(i<=time)
//  {
//   overtime=i*12;
//   i++;
//  }
//  alert("Overtime of this employee is Rs." + " " + overtime);
// }

// --------Q10--------

// main()
// function main(){
//     var amount = prompt("Enter the amount to be withdrawn (in hundreds): ");


//     alert("Required notes of Rs. 100 is:" + " " + amount / 100);
   
//     alert("Required notes of Rs. 50 is:" + " " + (amount % 100) / 50);
   
//     alert("Required notes of Rs. 10 is:" + " " + (((amount % 100) % 50) / 10));
   
// }


// ------------chapter#43-48----------

// index.html file has Q1 and Q2 solution and half of the question solution here and in html file

// -------Q3---------
// function deleteRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("one").deleteRow(i);
//   }

// -------Q5----------
// var clicks = 0;
//     function hello() {
//         clicks += 1;
//         document.getElementById("clicks").innerHTML = clicks;

//     };
//     function hello1(){
//         clicks -= 1;
//         document.getElementById("clicks").innerHTML = clicks;
//     }


// -----------chapter#49-52-----------
    
// --------Q1-----------
// function handleSubmit() {
//     const fname = document.getElementById('1name').value;
//     const lname = document.getElementById('2last').value;
//     const Email = document.getElementById('email').value;

//     sessionStorage.setItem("First Name", fname);
//     sessionStorage.setItem("Last Name", lname);
//     sessionStorage.setItem("Email", Email);

//     return;
// }

// window.addEventListener('load', () => {
    
//     const first = sessionStorage.getItem('First Name');
//     const last = sessionStorage.getItem('Last Name');
//     const email = sessionStorage.getItem('Email');
    
//     document.getElementById('result-firstname').innerHTML = first;
//     document.getElementById('result-lastname').innerHTML = last;
//     document.getElementById('result-email').innerHTML = email;

// })

// ---------Q2-----------
// function expandLoris() {
// var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. 
// document.getElementById("slowLoris").innerHTML = expandedParagraph;
// }
    
// ----------Q3--------------
// function edit_row(no){

//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
 
	
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
	
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no){

//  document.getElementById("row"+ no +"").outerHTML="";
// }



// --------------chapter#58 to 67---------

// -----------Q1------------
// var div = document.getElementById("main-content");
// var p = div.getElementsByTagName("p");
// var a = document.getElementsByClassName("render")
// var contents = p[0].innerHTML;

// var last = document.getElementById("lastName")
// var email = document.getElementById("email")

// console.log(last,email)

// console.log(p)
// console.log(a)


// ---------Q2------------
// var x = document.body.nodeType;
// document.getElementById("form-content").innerHTML = x;


// var x = document.body.childNodes;
// document.getElementById("last-name").innerHTML = x;


// var textnode = document.createTextNode("kumari");
// var item = document.getElementById("last-name").childNodes[2];
// item.replaceChild(textnode, item.childNodes[2]);

// var a = document.getElementById("main-content").firstElementChild.innerHTML;


// var list = document.getElementById("main-content").lastElementChild.innerHTML;


// var x = document.getElementById("lastName").nextElementSibling.innerHTML;


// var x = document.getElementById("lastName").previousElementSibling.innerHTML;

// var x = document.getElementById("email").parentNode.nodeName;

// var x = document.getElementById("email").nodeType;

// console.log(x)


// ------------chapter 53 to 58---------------

// ------Q1---------

// var modal = document.getElementById("myModal");

// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() { 
//   modal.style.display = "none";
// }

// var modal = document.getElementById("myModal1");

// var img = document.getElementById("myImg1");
// var modalImg = document.getElementById("img011");
// var captionText = document.getElementById("caption1");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName("close1")[0];

// span.onclick = function() { 
//   modal.style.display = "none";
// }


// var modal = document.getElementById("myModal2");

// var img = document.getElementById("myImg2");
// var modalImg = document.getElementById("img012");
// var captionText = document.getElementById("caption2");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName("close2")[0];

// span.onclick = function() { 
//   modal.style.display = "none";
// }


// var modal = document.getElementById("myModal3");

// var img = document.getElementById("myImg3");
// var modalImg = document.getElementById("img013");
// var captionText = document.getElementById("caption3");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName("close3")[0];

// span.onclick = function() { 
//   modal.style.display = "none";
// }