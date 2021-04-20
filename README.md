# Creating Promises

Promises in JavaScript are a way to handle **async** calls.Before then asynchronous calls were handled using callbacks. Promises are used to create cleaner and more elegant ways to handle asynchronous calls.
We create promises using the new **Promise** object keyword. A promise has three states namely:-

1. Pending.
2. Fullfilled.
3. Rejected.

A promise has two parts.

- Creating the promise. This part of the promise creates the promise and defines what's **successful** and what's **not successful**.
- Consuming the promise i.e stating what happens when the promise is fullfilled. A successful condition is met with resolve() function definition. A not successful condition is met with the reject() function definition.

### In the first part

The first part of the promise is created using the built-in Promise object in javascript.
<code> let promise = new Promise((resolve,reject)=>{...}); </code>
In the function body we define when to invoke resolve function and reject function.
<code> if(condition){ resolve(message); }</code>
<code> if(!condition){ reject('Error message') }</code>

The Promise() is a built-in object in JavaScript ES6. When this objects is instanciated using the new keyword it takes in a fuction as an argument.The single function then inturn takes in two functions as arguments i.e resolve and reject. So keep in mind that resolve and reject arguments in Promise are callback functions. This means they can be invoked within the function which is exactly what happens when we call resolve(message) and reject('Error Message')

Note: You can pass objects and arrays in resolve and reject.

### In the second part

In the second part we define the actual resolve() and reject() functions.
<code> promise.then((message)=> { ...Do this on resolve })
.catch((message)=>{ ...Do this on reject })
</code>

###### Let's add some meaningful comments to the function below to see how promises work

 Every Promise() structure has 2 parts 
### First Part           
 Create the Promise() and define the conditions of what is considered successful and not successful.

<code>```let promise = new Promise( (resolve, reject) => {
let momIsHappy = false; 
/* This is an arbitrary variable and is NOT part of the Promise */
if (momIsHappy){
    const phone = {
        type: 'IOS',
        color: 'Sea-Blue'
    }
}

//This condition is considered successful, hence invoke resolve()
resolve(phone);
if (!mumIsHappy)
//This condition is considered NOT successful, hence invoke reject()
reject('Mum is not happy!');
})```</code>




### The Second Part

 Define what to do when the successful condition(i.e. resolve()) is  met, and what to do when the not successful condition(i.e. / reject()) is met. 
<code>
```promise.then((message)=>{
console.log(message);

//define the resolve() function, in other words, what to do when the promise is successful.
})
.catch(()=>{
console.log(message);

//define the reject() function, in other words, what to do when the promise is NOT successful.

})```
</code>

Note that if you run the code the output will be 'Mum is not Happy', if you update the boolean mumIsHappy to true the output will be the phone object.

The messages are being passed from the resolve and reject functions and being executed in the .then() and .catch() sections of the Promise.

In our example, the arguments passed by the resolve and reject functions are object and string respectively. The argument passed in the resolve function is meant for .then and the argument passed in the reject function is meant for .catch function of the second part of the Promise.

### You can have more than one promise

##### Let's look at how we can chain these promises.

Multiple promises can be chained together using the .then() function. First promise returning the next promise and so on.

In the example below we create multiple promises:-

 <code> 
 
```var requestComplete = true;
promise1 = new Promise((resolve, reject) => {
  if (requestComplete)
    resolve("data received from 1");
})
promise2 = new Promise((resolve, reject) => {
  if (requestComplete)
    resolve("data received from 2");
})
promise3 = new Promise((resolve, reject) => {
 
 setTimeout( ()=>{
 resolve("data received from 3");
 }
,3000);
//We simulate a delay in data receipt by using setTimout() 
})

promise1.then((message) => {
console.log(message);
return promise2; //return promise2 when promise1 resolves.
}).then((message) => {
console.log(message);
return promise3; //return promise3 when promise2 resolves.
}).then((message) => {
console.log(message); //resolve promise3.
})```

 </code>

Note: The above code is executed in sequence, one after another and the last one will wait for 3 seconds before execution.

We can however use _Promise.all()_ and _Promise.race()_ to execute multiple promises.
The _.all_ evaluates all the Promises and executes the .then () method when all the _Promises_ within it's _promise array_ have been fullfilled. It returns an array of the promise results.

The .race on the other hand executes as soon any Promise on the Promise array has completed execution. .race does not wait for other Promises and resolves as soon as one Promises is resolved. Check out the code in promise.js file to understand this further.

A real world example is using Promises to fetch data from two different websites. We will use built-in XMLHttpRequest() requests.
