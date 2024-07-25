const { VerifaliaRestClient } = require('verifalia');

const verifalia = new VerifaliaRestClient({
    username: 'markisses',
    password: 'Z6DGwNZZB8KY4d32cs',
})

verifalia
    .emailValidations
    .submit('batman@gmail.com')
    .then(result => {
        // At this point the address has been validated: let's print
        // its email validation result to the console.

        const entry = result.entries[0];
        console.log(`${entry.classification} (${entry.status})`);

        // Prints out something like:
        // Deliverable (Success)
    })
    .catch(result => {
        const entry = result;
        console.log(`${entry} (${entry.status})`);
    });
