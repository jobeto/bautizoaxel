window.onload = function() {

    setTimeout(() => {

        showContent();
    }, 3000); 
};


function showContent(){
    var divLoading = $("#loading");
    var divPlay = $("#divPlay");

    divLoading.remove();
    divPlay.show();
    divPlay.addClass("h-100 d-flex align-items-center justify-content-center");
}

function play(){
    var divContent = $("#page");
    var divPlay = $("#divPlay");

    divPlay.remove();
    divContent.show();

    document.getElementById("rhenne").play(); 
}