const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <html>
      <head>
        <title>Backstage SSP</title>
      </head>
      <body style="background-color:#0f172a; text-align:center; padding-top:100px;">
        <h1 style="color:#38bdf8; font-size:48px;">
          🚀 Welcome to Backstage Self Service Portal!
        </h1>
        <p style="color:white; font-size:20px;">
          Running successfully inside Docker Container
        </p>
      </body>
    </html>
  `);
});

const PORT = 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});