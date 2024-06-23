// js11.js

const server = {
    getServer() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('PROMISE RESOLVE')
            }, 1000)
        })
    }
}

// Выполняем запрос с использованием встроенной функции fetch
fetch('https://bing.com/query=js')
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.text();  // преобразуем ответ в текст для отображения в консоли
    })
    .then((text) => {
        console.log(text);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

console.log(crypto.randomUUID())
