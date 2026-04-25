import app from "./src/app.js";
import connectionDB from "./src/config/database.js";

connectionDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
