Практическое задание
Приложение состоит из двух страниц: Формы и Палитры.

Страница “Форма”
Создайте форму с полями: (Имя, Фамилия, Отчество, Изображение)
При клике по заглушке изображения, должен открываться проводник для выбора изображения. После выбора, изображение должно отобразиться вместо заглушки. В проводнике выбрать можно только изображение.
После нажатия “Сохранить” данные должны отправиться по следующему адресу:

POST https://test-job.pixli.app/send.php

Параметры:
- action (обязательное), значение send_data
- id (обязательное), тип integer (число 1)
- image (обязательное), файл изображения
- contact, массив со строковыми полями полями name, surname, patronymic


Подсказка:
const data = new FormData()

data.set('contact[name]', "Иван")
data.set('contact[surname]', "Иванов")
data.set('contact[patronymic]', "Иванович")


Возвращаемый ответ должен отобразиться в поле Response.
Будет плюсом, если реализуете прикрепление файла через drag and drop.

Страница “Палитра”
При открытии страницы палитра пустая, не добавлено ни одного цвета.
При нажатии на “Добавить цвет” в палитре появляется цвет по умолчанию (выберите на свое усмотрение) с открытым ColorPicker, в котором пользователь выбирает цвет.
ColorPicker закрывается если кликнут вне него.
Для редактирования цвета, нужно щелкнуть по нему, так же открывается ColorPicker.
При наведении на цвет появляется крестик, по которому можно удалить цвет.
Дополнительно
Палитра должна храниться в Redux
Переход между страницами организован через React-router-dom
Код приложения залить на Git (GitHub, GitLab, BitBucket) в открытый репозиторий
