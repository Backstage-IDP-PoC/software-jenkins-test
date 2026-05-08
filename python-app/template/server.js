const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <body style="background:white;font-family:Arial;text-align:center;margin-top:40px;">
      <h1 style="color:blue;">Welcome to AI-Pwered DevOps Self Service Portal!</h1>
      <p style="color:gray;font-size:22px;">
         Accelerating Digital Transformation with Intelligent DevOps Automation, 
        Seamless CI/CD Integration, and Enterprise-Grade Deployment Strategies.
      </p>
    </body>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
