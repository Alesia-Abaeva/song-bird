# songbird

[songbird](https://rolling-scopes-school.github.io/alesia-abaeva-JSFE2022Q3/songbird/) приложение-викторина для распознавания птиц по их голосам. Проект создан в рамках задания [RS School JavaScript/Front-end](https://rs.school/js/).

## Структура приложения

- стартовая страница приложения
- страница викторины
- страница с результатами

## Механизм игры

- птица в блоке с вопросом выбирается рандомно
- при клике по варианту ответа с названием птицы, в блоке с описанием птицы выводятся информация о ней
- если игрок выбрал правильный ответ, в блоке с вопросом выводится название и изображение птицы
- в начале игры количество баллов 0. Если игрок дал правильный ответ с первой попытки, его счёт увеличивается на 5 баллов, каждая следующая попытка даёт на один балл меньше, если правильный ответ дан только с последней, шестой попытки, игрок получает за него 0 баллов. Баллы за все вопросы суммируются
- для правильных и неправильных ответов игрока используется звуковая и цветовая индикация
- когда игрок дал правильный ответ, активируется кнопка "Дальше" и он получает возможность перейти к следующему вопросу
- после последнего вопроса выводится страница с результатами игры

## Screenshot

## Технический стек

- javascript
- scss
- html
- webpack

## Локальный запуск

Чтобы склонировать репозиторий, вам нужно [Git](https://git-scm.com) и [Node.js](https://nodejs.org/en/download/) (который идет вместе с [npm](http://npmjs.com)) установить их на свой компьютер. В коммандрой строке ввести:

```bash
# Clone this repository
$ git clone https://github.com/Alesia-Abaeva/song-bird.git

# Go into the repository and install dependencies
$ npm install

# Start the project
$ npm run start



```
