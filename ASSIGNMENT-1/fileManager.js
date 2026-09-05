const fs = require("fs");

const fileName = "test.txt";

console.log("File Manager Started");

// CREATE
fs.writeFile(fileName, "This is the original content.", (err) => {

    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File created successfully.");

    // READ
    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("File content:");
        console.log(data);

        // UPDATE
        fs.appendFile(
            fileName,
            "\nThis content was added during update.",
            (err) => {

                if (err) {
                    console.log("Error updating file:", err.message);
                    return;
                }

                console.log("File updated successfully.");

                // READ AGAIN
                fs.readFile(fileName, "utf8", (err, updatedData) => {

                    if (err) {
                        console.log(
                            "Error reading updated file:",
                            err.message
                        );
                        return;
                    }

                    console.log("Updated file content:");
                    console.log(updatedData);

                    // DELETE
                    fs.unlink(fileName, (err) => {

                        if (err) {
                            console.log(
                                "Error deleting file:",
                                err.message
                            );
                            return;
                        }

                        console.log("File deleted successfully.");
                        console.log("File Manager Finished");
                    });
                });
            }
        );
    });
});