Element Debugger Plugin for Vencord
https://i.imgur.com/example.png
Пример работы плагина

Описание
Element Debugger - мощный инструмент для разработчиков, отображающий детальную информацию о DOM-элементах Discord при наведении курсора. Исходный код доступен в репозитории ElementDebuggerDS.

Установка
Для разработчиков (сборка из исходников)
1. Установите необходимое для CMD если ещё не установлено:

nodejs - https://nodejs.org/en

git - https://git-scm.com/download/win
 
2. Клонируйте и настройте Vencord:
перейдите сюда: %USERPROFILE%\Documents
откройте в этом расположении CMD и вводите команды по очереди:

1. git clone https://github.com/Vendicated/Vencord
2. cd Vencord
3. npm i -g pnpm
4. pnpm i

3.Создайте папку для пользовательских плагинов и установите ElementDebugger :
1. mkdir -p src/UserPlugins
2. cd src/UserPlugins
3. git clone https://github.com/erteterya/ElementDebuggerDS/

4.Соберите и инжектируйте:
1. pnpm build
2. pnpm inject

Для пользователей (готовый плагин)
Создайте структуру папок:

 "C:\Users\your user's name\Documents\Vencord\src\UserPlugins\ElementDebuggerDS"
"быстрый переход: %USERPROFILE%\Documents\Vencord\src\"

Скачайте index.ts из репозитория и поместите в:
C:\Users\your user's name\Documents\Vencord\src\UserPlugins\ElementDebuggerDS\
Перезапустите Discord

Возможности:
Полная техническая информация об элементах интерфейса

Адаптивное позиционирование подсказки

Визуальное выделение исследуемых элементов

Поддержка всех версий Discord

Оптимизированная производительность
