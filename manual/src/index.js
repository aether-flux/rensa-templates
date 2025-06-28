import { Rensa } from "rensa";

const app = new Rensa();
// const PORT = process.env.PORT || 5000;

app.get({
  path: "/",
}, (req, res) => {
  res.send({ message: "Hello, Rensa!", route: "/" });
});

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}...`);
// });


export default app;
