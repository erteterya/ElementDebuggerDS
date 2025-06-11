# Element Debugger Plugin for Vencord

# Описание
Element Debugger - мощный инструмент для разработчиков, отображающий детальную информацию о DOM-элементах Discord при наведении курсора. Исходный код доступен в репозитории ElementDebuggerDS.

# Установка
Для разработчиков (сборка из исходников)
## 1. Установите необходимое для CMD если ещё не установлено:

nodejs - https://nodejs.org/en

git - https://git-scm.com/download/win
 
## 2. Клонируйте и настройте Vencord:
перейдите сюда (используйте Win + R): 
```
%USERPROFILE%\Documents
```
откройте в этом расположении CMD и вводите команды по очереди:
```
git clone https://github.com/Vendicated/Vencord
```
```
cd Vencord
```
```
npm i -g pnpm
```
```
pnpm i
```
3.Создайте папку для пользовательских плагинов и установите ElementDebugger :
```
mkdir -p src/UserPlugins
```
```
cd src/UserPlugins
```
```
git clone https://github.com/erteterya/ElementDebuggerDS/
```
4.Соберите и инжектируйте:
```
pnpm build
```
```
pnpm inject
```
# Для пользователей (готовый плагин)
Создайте структуру папок:

 "C:\Users\your user's name\Documents\Vencord\src\UserPlugins\ElementDebuggerDS"
быстрый переход:
``` 
%USERPROFILE%\Documents\Vencord\src\
```
Скачайте index.ts из репозитория и поместите в:

C:\Users\your user's name\Documents\Vencord\src\UserPlugins\ElementDebuggerDS\

Перезапустите Discord

# Возможности:
Полная техническая информация об элементах интерфейса

Адаптивное позиционирование подсказки

Визуальное выделение исследуемых элементов

Поддержка всех версий Discord

Оптимизированная производительность
