// import { Rensa } from "rensa";
// import homeRoute from "./routes/homeRoute";

const { Rensa } = require('rensa');
const homeRoute = require("./routes/homeRoute");

const app = new Rensa();
const port = process.env.PORT || 3000;

// Import routes
homeRoute(app);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
})
