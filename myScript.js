//Making a variable for each of my divs...//



var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2");


var picture = document.getElementById("picture");






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
        picture.style.backgroundImage = "url(./species/" + bigArray[i].presentPictureUrl + ")";
    });



};


var counter = 0;
container2.addEventListener("click", function() {
    console.log("eek");
    audio.src = "./species/" + bigArray[x].audioUrl;


    counter = counter + 1;
    if (counter % 2 == 1) { audio.play();
    picture.style.backgroundImage = "url(./species/" + bigArray[x].absentPictureUrl + ")"; } 
    else if (counter % 2 == 0) {
        audio.pause();
        picture.style.backgroundImage = "url(./species/" + bigArray[x].presentPictureUrl + ")";

    }
});



for (var i = 0; i < 64; i++) {
    tableOfContents(i)
};