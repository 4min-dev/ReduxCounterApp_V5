<h1 align="center">RU | Redux counter App V5</h1>

[V1](https://github.com/4min-dev/ReduxCounterApp_V1) | [V2](https://github.com/4min-dev/ReduxCounterApp_V2) | [V3](https://github.com/4min-dev/ReduxCounterApp_V3) | [V4](https://github.com/4min-dev/ReduxCounterApp_V4) | [V5](https://github.com/4min-dev/ReduxCounterApp_V5)

<h2 align="center">Технологический стек, используемый в проекте:</h2>

- CSS;
- HTML;
- JS;
- TS;
- React;
- Redux;
- Redux-saga;
- Redux-thunk;
- Redux-toolkit;
- RTK-Query.

<h2 align="center">Что нового?</h2>

Было принято решение вернуть папку public, дабы упростить работу с внедрением картинок в код, поскольку проект начал значительно расширяться. Все картинки были перенесены в папку public, благодаря чему мы смогли избавиться от лишних строчек кода, а так же от папки img, в которой хранились все картинки.

Был значительно расширен сам проект. Добавлена возможность удаления пользователей, добавления пользователей, а так же обновления информации пользователей.

Была создана имитация работы с живым сервером, сервер запускается при помощи команды npx json-server db.json (по дефолту порт равняется 3000, но вы можете указать его сами, после указания файла db.json введите --port=value).

Работа по добавлению, удалению и обновлению юезров так же взаимодействует и с сервером, удаляя или обновляя информацию на нём.

Данные юзеров хранятся в файле db.json, который по дефолту хранится в корневой папке.

Было создано множество переиспользуемых компонентов интерфейса, пример - модальное окно (popup), форма по взаимодействию с информацией пользователей (newUserForm).

Было создано множество переиспользуемых функций, позволяющих упростить работу с проектом, пример - функция по структурированию информации пользователей (formatUser), а так же по обработке серверных ошибок ( getServerErrorMessage ).

Помимо перечисленных изменений присутствует множество мелких изменений, позволившие оптимизировать код и улучшить его читабельность.

<hr/>

<h1 align="center">EN | Redux counter app V5</h1>

<h2 align="center">Technology stack:</h2>

- CSS;
- HTML;
- JS;
- TS;
- React;
- Redux;
- Redux-saga;
- Redux-thunk;
- Redux-toolkit;
- RTK-Query.

<h2 align="center">Whats new?</h2>

It was decided to return the public folder in order to simplify the work with embedding images in the code, as the project started to expand significantly. All images were moved to the public folder, thanks to which we could get rid of unnecessary lines of code, as well as the img folder where all images were stored.

The project itself was significantly expanded. We added the ability to delete users, add users, as well as update user information.

A simulation of working with a live server was created, the server is started with the command npx json-server db.json (by default the port is 3000, but you can specify it yourself - npx json-server db.json --port=value).

The job of adding, deleting and updating users also interacts with the server, deleting or updating information on it.

User data is stored in the db.json file, which by default is stored in the root folder.

A lot of reusable interface components have been created, an example is a modal window (popup).

A lot of reused functions were created to simplify the work with the project, for example - the function for structuring user information (formatUser), as well as for processing server errors (getServerErrorMessage).

In addition to these changes, there are many minor changes that allowed to optimize the code and improve its readability.
