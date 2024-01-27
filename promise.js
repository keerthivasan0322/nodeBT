const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation, for example, fetching data from an API
    setTimeout(() => {
      const success = true;
  
      if (success) {
        resolve("Data successfully fetched!");
      } else {
        reject("Error fetching data");
      }
    }, 1000); // Simulating an asynchronous operation taking 2 seconds
  });
  
  // Handling the promise
  myPromise
    .then((result) => {
      console.log(result); // Output when the promise is fulfilled
    })
    .catch((error) => {
      console.error(error); // Output when the promise is rejected
    });
``  