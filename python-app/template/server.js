const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <body style="background:white;font-family:Arial;text-align:center;margin-top:40px;padding:20px;">
      
      <h1 style="color:blue;font-size:42px;">
        Welcome to the AI-Powered DevOps Self Service Portal
      </h1>

      <p style="color:black;font-size:24px;max-width:1200px;margin:auto;line-height:1.7;">
        Accelerating Digital Transformation with Intelligent DevOps Automation, 
        Seamless CI/CD Integration, and Enterprise-Grade Deployment Strategies.
      </p>

      <p style="color:gray;font-size:20px;max-width:1300px;margin:30px auto;line-height:1.8;">
        Our platform is now integrated with <b>Artificial Intelligence</b> to empower development teams 
        with faster delivery, enhanced software quality, proactive security, and scalable cloud-native deployments.
        <br><br>
        Powered by <b>Jenkins CI</b> for continuous integration, 
        <b>SonarQube</b> for intelligent code quality analysis, 
        <b>Vault</b> for secure secret management, and 
        <b>Argo CD</b> for GitOps-driven automated deployments to 
        <b>Google Kubernetes Engine (GKE)</b>.
        <br><br>
        Enabling organizations to achieve faster releases, operational excellence, 
        improved developer productivity, and a highly reliable client-centric delivery ecosystem.
      </p>

      <h2 style="color:green;margin-top:40px;">
        Driving Innovation • Automation • Security • Business Growth
      </h2>

    </body>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
