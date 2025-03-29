const { Rensa } = require("rensa");

const app = new Rensa();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ msg: "Hello, Rensa!" });
})

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
})
