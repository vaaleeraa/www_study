$.get("https://database-try-valera.firebaseio.com/posts.json", function ( data ) {
    // console.table(data.title);
    //загрузка из базы в теги

// добавить html-код в контейнер с классом post и берем из базы тип
let content = `<div class="post-${data.type} post">`;
// записываем заголовок в контент
content += `<h1>${data.title}</h1>`;
// записываем параграф
content += `<p>${data.text}</p>`;
//закрываем тег див с классом post
content += '</div>';

// добавляем в тело html-кода в базовый контейнер переменную контент со всем контентом который нагенерили  
    $('.container').html(content);
    
    //заглушка пока данные грузятся
    $('.overlay').animate({'border-radius':'50%'}, 'slow')
    .animate({'width':'0', 'height':'0', 'top':'50%', 'left':'50%'}, 800);
});