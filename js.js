
// Return a quote
function getQuote(json) {
    var index = rand(json.quotes.length);
    return json.quotes[index].quote;
}

// Random helper
function rand(max) {
    return (Math.floor(Math.random() * max));
}

function updateMessage(json) {
    $(".quote").text(getQuote(json));
}

function randBg() {
    var backs = [
        "./img/seven-mile-beach-grand.jpg",
        "./img/volcano-05.jpg",
        "./img/arc.jpg",
        "./img/eiffel.jpg",
        "./img/sydney.jpg",
        "./img/taj.jpg"
    ]

    return backs[rand(backs.length)];
}

$(document).ready(function() {
    var $p = $('.portrait');
    var $bg = $p.css('background-image');
    $p.css('background-image', $bg + ", " + "url(" + randBg() + ")" );
    $.getJSON("quotes.json", function(json) {
        updateMessage(json);
    });    
});