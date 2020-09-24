# Рейд бот от Уртёма Альянова
## Содержание
* [Как получить TOKEN для пользователя](https://github.com/Shizo-Shizo/raid-bot-by-shozo/#%D0%BA%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-token-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F)
* [Как получить ID беседы](https://github.com/Shizo-Shizo/raid-bot-by-shozo/#%D0%BA%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-id-%D0%B1%D0%B5%D1%81%D0%B5%D0%B4%D1%8B)
* [Как получить GroupID](https://github.com/Shizo-Shizo/raid-bot-by-shozo/#%D0%BA%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-id-%D0%B1%D0%B5%D1%81%D0%B5%D0%B4%D1%8B)
  * [Если ссылка на группу не была изменена, то ссылка должна выглядеть так](https://github.com/Shizo-Shizo/raid-bot-by-shozo/#%D0%B5%D1%81%D0%BB%D0%B8-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B0-%D0%BD%D0%B0-%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D1%83-%D0%BD%D0%B5-%D0%B1%D1%8B%D0%BB%D0%B0-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B0-%D1%82%D0%BE-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B0-%D0%B4%D0%BE%D0%BB%D0%B6%D0%BD%D0%B0-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D0%B5%D1%82%D1%8C-%D1%82%D0%B0%D0%BA)
  * [Если ссылка была изменена](https://github.com/Shizo-Shizo/raid-bot-by-shozo/#%D0%B5%D1%81%D0%BB%D0%B8-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B0-%D0%B1%D1%8B%D0%BB%D0%B0-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B0)
* [Инструкция по установке](https://github.com/Shizo-Shizo/raid-bot-by-shozo/#%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F-%D0%BF%D0%BE-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B5)
  * [Если скачан ZIP](https://github.com/Shizo-Shizo/raid-bot-by-shozo/#%D0%B5%D1%81%D0%BB%D0%B8-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D0%BD-zip)
  * [Если скопирован репозиторий](https://github.com/Shizo-Shizo/raid-bot-by-shozo/#%D0%B5%D1%81%D0%BB%D0%B8-%D1%81%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B9)
## Как получить TOKEN для пользователя
Что бы получить ACCESS TOKEN, который содержится в token.txt, перейдите по этой ссылке - https://vkhost.github.io/ и выберите Kate Mobile, дальше разрешаете всё и копируем в адресной строке наш access token и вставляем в наш файл а именно token.txt
## Как получить ID беседы
Для начала заходим в беседу, которую вы хотите зарейдить, в адресной строке будет что-то вроде этого:
```
https://vk.com/im?sel=c45
```
или
```
https://vk.com/im?peers=c54&sel=c45
```
или же
```
https://vk.com?peers=c54_c65&sel=c45
```
Где sel там и ID беседы, которую вы хотите зарейдить
## Как получить GroupID
### Если ссылка на группу не была изменена, то ссылка должна выглядеть так
```
https://vk.com/club196879061
```
или
```
https://vk.com/public196879061
```
Что после `club` или `public` это и есть ID группы
### Если ссылка была изменена
Пример:
```
https://vk.com/kommemmur
```
То заходим в аву сообщества (можно на пост, видео и тд.)
```
https://vk.com/kommemmur?z=photo-196879061_457239018%2Falbum-196879061_0%2Frev
```
Где `196879061` это и есть ID группы
## Инструкция по установке
Для начала [установим NodeJS](https://nodejs.org/ru/)
### Если скачан ZIP
* 1 - Разархивируем сам ZIP архив
* 2 - Заходим через консоль где сам репозиторий и пишим команду `npm update` или `npm install`
* 3 - Ну и [Как получить TOKEN для пользователя](https://github.com/Shizo-Shizo/raid-bot-by-shozo/#%D0%BA%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-token-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F) конечно же
* 4 - Запускаем start.bat, и всё работает
### Если скопирован репозиторий
* 1 - Заходим через консоль где скопирован сам репозиторий и пишим команду `npm update` или `npm install`
* 2 - Ну и [Как получить TOKEN для пользователя](https://github.com/Shizo-Shizo/raid-bot-by-shozo/#%D0%BA%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-token-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F) конечно же
* 3 - Запускаем start.bat, и всё работает

Как видим ZIP и Скопированный репо довольно таки похожи
