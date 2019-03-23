$.get("https://domashka-d2bc0.firebaseio.com/data.json", function ( data ) {
let audiocontent = `<audio id="player" controls autoplay>
                    <source src="${data.audio}">
                    </audio>`;
    $('.audio').html(audiocontent);

    $('#player').hover(show);
function show() {
    let gif = $(`<img style="width:100vw;height:100vh;" src=${data.gif}>`);
    console.log('gif loaded');
    $('.hov_image').html(gif);

    $('.hov-image').toggle();
}

});


// $.get("https://domashka-d2bc0.firebaseio.com/data.json", function ( data ) {
// $('#player').hover(show);
// function show() {
//     let gif = $(`<img src=${data.gif}>`);

//     console.log(`'gif loaded'${data.gif}`);

//     // $('.hov-image').toggle();
//     $('.hov-image').html(gif);
// }

// }); 



