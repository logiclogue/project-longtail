const Metalsmith = require("metalsmith");

Metalsmith(__dirname)
    .metadata({
        sitename: "Project Longtail"
    })
    .build(error => {
        if (error) {
            throw error;
        }

        console.log("Build successful");
    });
