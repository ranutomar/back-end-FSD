// Question 4 - Promise.all()

const users = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Users fetched");
    }, 2000);
});

const products = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Products fetched");
    }, 3000);
});

const orders = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Orders fetched");
    }, 1000);
});

Promise.all([users, products, orders])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    });