const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    await fsPromises.writeFile(
      path.join(__dirname, "files", "starter.txt"),
      "Hello my name is Wojtek"
    );

    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );

    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    console.log("DATA", data);

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promisedWrite.txt"),
      `${data}`
    );

    await fsPromises.appendFile(
      path.join(__dirname, "files", "promisedWrite.txt"),
      `\n\nNice to meet you`
    );

    await fsPromises.rename(
      path.join(__dirname, "files", "promisedWrite.txt"),
      path.join(__dirname, "files", "helloChained.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "helloChained.txt"),
      "utf-8"
    );
    console.log(newData);
  } catch (error) {
    console.error(error);
  }
};

fileOps();

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to met you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       " \n\n Appending text",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "renamed.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Renamed complete");
//           }
//         );
//       }
//     );
//   }
// );

process.on("uncaughtException", (err) => {
  console.error(`There was an uncought error: ${err}`);
  process.exit();
});
