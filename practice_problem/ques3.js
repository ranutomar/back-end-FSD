

function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User logged in");
        }, 1000);
    });
}

function getUserDetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User details fetched");
        }, 1000);
    });
}

function getUserOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User orders fetched");
        }, 1000);
    });
}

loginUser()
    .then((result) => {
        console.log(result);
        return getUserDetails();
    })
    .then((result) => {
        console.log(result);
        return getUserOrders();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });