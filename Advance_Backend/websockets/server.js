const WebSocket = require("ws");
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT ?? 8956;

// Create HTTP server
const httpServer = http.createServer(async function (req, res) {
  const indexFile = await fs.promises.readFile(
    path.resolve("./index.html"),
    "utf-8",
  );

  res.setHeader("Content-Type", "text/html");
  res.end(indexFile);
});

// Create WebSocket server
const wsServer = new WebSocket.Server({
  server: httpServer,
});

// When a client connects
wsServer.on("connection", (websocket) => {
  console.log("WebSocket connection...");

  // When client sends a message
  websocket.on("message", (data) => {
    console.log("WebSocket message received:", data.toString());
    // websocket.send(data.toString());
    //broadcast the message to all the clients
    wsServer.clients.forEach((client) => {
      client.send(data.toString());
    });

    // Send response back to client
  });

  // When connection closes
  websocket.on("close", () => {
    console.log("WebSocket connection closed");
  });

  // If an error occurs
  websocket.on("error", (error) => {
    console.log("WebSocket error:", error);
  });
});

// Start HTTP + WebSocket server
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
