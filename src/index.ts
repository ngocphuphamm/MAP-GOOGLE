import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const main = async (): Promise<void> => {
  try {
    await app.listen(app.get("port"));
    console.log(`server running on  ${app.get("host")}:${app.get("port")}`);
  } catch (error) {
    console.error(`connection error: ${error}`);
    process.exit(0);
  }
};

//* Main Process
main();

