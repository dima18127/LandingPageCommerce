import checkNumInputs from './checkNumInputs';

const forms = () => {
// находим все формы и инпуты
    const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input')
    
    checkNumInputs('input[name="user_phone"]')
// обьект сообщений
const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так'
};
// фунция отвечающая за отправку запроса
const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
        method: "POST",
        body: data
    });
    return await res.text()
}
const clearInputs = () => {
    inputs.forEach(item => {
        item.value = '';
    });
};

//обрабатываем все формы
    form.forEach(item => {
        item.addEventListener('submit', (e)=> {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            //собираем все введенные данные из формы через конструктор
            const formData = new FormData(item);
            //отправляем запрос на сервер с данными которые получил FormData
            postData('assets/server.php', formData)
            .then(res => {
                console.log(res);
                statusMessage.textContent = message.success;
            })
            .catch(()=>{
                statusMessage.textContent = message.failure
            })
            .finally(()=>{
                clearInputs();
                setTimeout(()=>{
                    statusMessage.remove();
                }, 5000);
            });
        });
    });
};
export default forms;