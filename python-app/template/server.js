const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { 
    "Content-Type": "text/html; charset=UTF-8" 
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Self-Service Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }

            .container {
                text-align: center;
                background: rgba(255, 255, 255, 0.1);
                padding: 40px;
                border-radius: 15px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            }

            h1 {
                font-size: 36px;
                margin-bottom: 10px;
            }

            p {
                font-size: 18px;
                opacity: 0.9;
            }

            .btn {
                margin-top: 20px;
                padding: 12px 25px;
                font-size: 16px;
                color: white;
                background-color: #00c6ff;
                border: none;
                border-radius: 25px;
                cursor: pointer;
                transition: 0.3s ease;
            }

            .btn:hover {
                background-color: #0072ff;
                transform: scale(1.05);
            }

            .footer {
                margin-top: 20px;
                font-size: 14px;
                opacity: 0.7;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Self-Service Portal</h1>
            <p>Welcome to the DevOps Automation Platform</p>
            <button class="btn" onclick="alert('Service is running successfully!')">
                Check Status
            </button>
            <div class="footer">
                Powered by Node.js | Running Behind Load Balancer
            </div>
        </div>
    </body>
    </html>
  `);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});