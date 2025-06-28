import { route } from "rensa/compose";

export default route((req, res) => {
  res.send({ message: "Hello, Rensa!", route: "/" });
});
