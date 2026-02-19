import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/inquiry", (req, res) => {
    const { name, email, service, message } = req.body;
    
    console.log("New Inquiry Received:");
    console.log(`From: ${name} (${email})`);
    console.log(`Service: ${service}`);
    console.log(`Message: ${message}`);
    console.log("Target Email: natureadmire@gmail.com");

    // In a production environment, you would use a service like SendGrid, Mailgun, or Nodemailer here.
    // For now, we simulate a successful submission.
    
    res.json({ 
      success: true, 
      message: "Inquiry received successfully. We will get back to you soon." 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
