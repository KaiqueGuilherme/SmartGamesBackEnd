import { CreateServer } from "./Server.js";

const PORT = process.env.PORT || 4000;
const app = CreateServer();

app.listen(PORT, () => {
  console.log(`O servidor está no ar http://localhost:${PORT}`);
});