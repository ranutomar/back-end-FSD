// Question 6 - Async/Await Error Handling

function getData() {
    return new Promise((resolve, reject) => {
        reject("Error: Unable to fetch data");
    });
}

async function fetchData() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

fetchData();