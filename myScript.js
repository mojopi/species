//Making a variable for each of my divs...//



var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2");
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var next1 = document.getElementById("next1");
var spName1 = document.getElementById("spName1");
var spName2 = document.getElementById("spName2");





// var counter1 = -1;

// next1.addEventListener("click", function() {
//     console.log("hi");
//     counter1 = counter1 + 1;
//     page1.style.backgroundImage = "url(./species/" + bigArray[counter1].presentPictureUrl + ")";
//     spName1.innerText = bigArray[counter1].name;


//     setTimeout(function() {
//         page1.style.backgroundImage = "url(./species/" + bigArray[counter1].absentPictureUrl + ")";

//         page2.style.backgroundImage = "url(./species/" + bigArray[counter1].presentPictureUrl + ")";

//     }, 1000);
//     audio1.src = "./species/" + bigArray[counter1].audioUrl;
// });






// back1.addEventListener("click", function() {
//     console.log("hi");
//     counter1 = counter1 - 1;
//     page1.style.backgroundImage = "url(./species/" + bigArray[counter1].presentPictureUrl + ")";
//     spName1.innerText = bigArray[counter1].name;


//     setTimeout(function() {
//         page1.style.backgroundImage = "url(./species/" + bigArray[counter1].absentPictureUrl + ")";

//     }, 3000);
//     audio1.src = "./species/" + bigArray[counter1].audioUrl;
// });

var x;
var audio = document.createElement('audio');
    document.body.appendChild(audio);


function tableOfContents(i) {
    var link = document.createElement('div');
    link.href = "#square" + i;
    container1.appendChild(link);
    link.innerText = bigArray[i].name;
    link.classList.add('tableOfContents');


    link.addEventListener("click", function() {
        // console.log('hello?')
        x = i;
        container2.style.backgroundImage = "url(./species/" + bigArray[i].presentPictureUrl + ")";
    });



};


var counter = 0;
container2.addEventListener("click", function() {
    console.log("eek");
    
    container2.style.backgroundImage = "url(./species/" + bigArray[x].absentPictureUrl + ")";
    audio.src = "./species/" + bigArray[x].audioUrl + ")";

    audio.play();

    // counter = counter + 1;
    // if (counter % 2 == 1) { audio.play(); } 
    // else if (counter % 2 == 0) {
    //     audio.pause();

    // }
});



for (var i = 0; i < 64; i++) {
    tableOfContents(i)
};