// search page display
var searchPage = document.getElementById("search-active-id");
document.addEventListener("DOMContentLoaded", function() {
    var searchIcon = document.getElementById("search-icon-id");
    var searchPage = document.getElementById("search-active-id");

    searchIcon.addEventListener("click", function() {
        searchPage.style.display = (searchPage.style.display === "none") ? "block" : "none";
        document.getElementById("search-text").focus();
        searchInputField.value = "";
    });
});

// hide search page
document.addEventListener("DOMContentLoaded", function(){
    var closeSearchIcon = document.getElementById("close-search-page-icon");

    closeSearchIcon.addEventListener("click", function(){
        searchPage.style.display = (searchPage.style.display === "block") ? "none" : "block";
    })
});

// focus events on input
var searchInputField = document.getElementById("search-text");
function searchInputFieldFocus(){
    searchInputField.style.outline = "none";
}


