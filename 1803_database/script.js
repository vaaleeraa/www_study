$.get("https://database-try-valera.firebaseio.com/posts.json", function ( data ) {
    // console.table(data.title);
    //загрузка из базы в теги
    $('.post h1').html(data.title);
    $('.post p').html(data.text);

    //заглушка пока данные грузятся
    $('.overlay').animate({'border-radius':'50%'}, 'slow')
    .animate({'width':'0', 'height':'0', 'top':'50%', 'left':'50%'}, 800);
});