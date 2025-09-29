import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app
  .listen(PORT, () => {
    console.log(`✅ Servidor corriendo en: http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error("❌   Error al iniciar el servidor:", err);
  });
