window.onload = function() {

    setTimeout(() => {

        showContent();
    }, 3000); 
};


function showContent(){
    var divLoading = $("#loading");
    var divContent = $("#page");

    divLoading.remove();
    divContent.show();
}