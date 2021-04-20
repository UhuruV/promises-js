
// /*  #### ----ES6 SYNTAX---- ####  */
let preparedForExams = true;
/* Creating a promise */
const willPassExams = new Promise(
    (resolve, reject) => {
        if (preparedForExams) {
            const results = {
                exam: 'Passed',
                marks: 500
            }
            resolve(results);
        }
        else {
            const reason = new Error("You didn't prepare enough for exams");
            reject(reason);
        }
    }
);

/* Chaining a promise */
//2nd Promise. showOff results to friends

const showOff = function (result) {
    const message = `Hey I ${result.exam} my exams and got ${result.marks} marks`;
    console.log(message);
    return Promise.resolve(message);
}

/* Consuming the promise */
const checkResults = function () {
    willPassExams
        .then(showOff)
        .then((fullfilled) => {
            console.log(fullfilled);
        }
        ).catch((error) => {
            console.log(error.message);
        });
}
checkResults();

/* #####----ES7 SYNTAX---- #### */

/* Creating a promise */
const willPassExams = new Promise(
    (resolve, reject) => {
        if (preparedForExams) {
            const results = {
                exam: 'Passed',
                marks: 500
            }
            resolve(results);
        }
        else {
            const reason = new Error("You didn't prepare enough for exams");
            reject(reason);
        }
    }
);

/* Second Promise */

async function showOff(results) {
    return new Promise((resolve, reject) => {
        var message = `Hey I ${results.exam} my exams and got ${results.marks} marks`;
        resolve(message);
    });
}

async function checkResults() {
    try {
        let examResults = await willPassExams;
        let message = await showOff(examResults);

        console.log(message);
    }
    catch (error) {
        console.log(error.message);
    }
}

(
    async () => {
        checkResults();
    }
)();




// .all() example
var requestComplete = true;
promise1 = new Promise((resolve, reject) => {
    if (requestComplete)
        resolve("data received from 1");
})
promise2 = new Promise((resolve, reject) => {
    if (requestComplete)
        resolve("data received from 2");
})
promise3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("data received from 3");
    }, 2000);
})
Promise.all([promise1, promise2, promise3]).then((message) => {
    console.log(message);
})
/*
When you run this code, the Promise waits for all the Promises within the promise array to complete. Since the promise3 has a delay of 2 seconds, no output is shown for 2 seconds.
Only after the 2 seconds, once all of the Promises resolve, does the console.log output the message.
In this case, the message is an array that contains the messages from all of the three promises:
 */


// .race() example
var requestComplete = true;
promise1 = new Promise((resolve, reject) => {
    if (requestComplete)
        resolve("data received from 1");
})
promise2 = new Promise((resolve, reject) => {
    if (requestComplete)
        resolve("data received from 2");
})
promise3 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("data received from 3"); }, 2000);
})
Promise.race([promise1, promise2, promise3]).then((message) => {
    console.log(message);
})

/*
When the .race() example is run, the console.log outputs immediately. It does not wait for the promise3 to finish execution. It executes the .then() function as soon as any one of the Promises resolves.
In this case, the message is not an array but instead contains as its argument the arguments of the first Promise resolved — it contains only a single string in this case:- //data received from 1
 */