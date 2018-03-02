const Metalsmith = require("metalsmith");

Metalsmith(__dirname)
    .build(error => {
        if (error) {
            throw error;
        }

        console.log("Build successful");
    });
