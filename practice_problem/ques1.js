const data = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data fetched successfully");
    }, 2000);
});

data.then((result) => {
    console.log(result);
});