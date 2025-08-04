const fs = require('fs').promises;
const path = require('path');

module.exports = async (req, res) => {
  // AUTHENTICATION TEMPORARILY DISABLED FOR PUBLIC ACCESS
  // To re-enable authentication, uncomment the code block below
  
  /*
  // Get authorization header
  const authHeader = req.headers.authorization;
  
  // Check if authorization header exists and is Basic auth
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="azfamilylaw.wiki"');
    res.status(401).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Authentication Required - azfamilylaw.wiki</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f5f5f5; }
          .container { max-width: 500px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          h1 { color: #333; margin-bottom: 10px; }
          p { color: #666; line-height: 1.5; }
          .domain { color: #3f51b5; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Authentication Required</h1>
          <p>Welcome to <span class="domain">azfamilylaw.wiki</span></p>
          <p>This is a private Arizona Family Law Knowledge Base.<br>Please enter your credentials to continue.</p>
        </div>
      </body>
      </html>
    `);
    return;
  }
  
  // Decode credentials
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');
  
  // Check credentials
  const validUsername = 'admin';
  const validPassword = process.env.SITE_PASSWORD || 'AzFamilyLaw2024!';
  
  if (username !== validUsername || password !== validPassword) {
    res.setHeader('WWW-Authenticate', 'Basic realm="azfamilylaw.wiki"');
    res.status(401).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Invalid Credentials - azfamilylaw.wiki</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f5f5f5; }
          .container { max-width: 500px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          h1 { color: #d32f2f; margin-bottom: 10px; }
          p { color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Invalid Credentials</h1>
          <p>The username or password you entered is incorrect.</p>
        </div>
      </body>
      </html>
    `);
    return;
  }
  */
  
  // If authenticated, serve the requested file
  try {
    // Get the requested path
    let requestedPath = req.url.substring(1); // Remove leading slash
    
    // Default to index.html if no path specified
    if (!requestedPath || requestedPath === '' || requestedPath.endsWith('/')) {
      requestedPath = requestedPath + 'index.html';
    }
    
    // Construct file path
    const filePath = path.join(process.cwd(), 'site', requestedPath);
    
    // Check if file exists
    try {
      await fs.access(filePath);
    } catch (error) {
      // Try adding .html extension
      try {
        await fs.access(filePath + '.html');
        const fileContent = await fs.readFile(filePath + '.html', 'utf-8');
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(fileContent);
        return;
      } catch (error) {
        res.status(404).send('File not found');
        return;
      }
    }
    
    // Read and serve the file
    const fileContent = await fs.readFile(filePath);
    
    // Set content type based on file extension
    const ext = path.extname(filePath).toLowerCase();
    const contentTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon'
    };
    
    res.setHeader('Content-Type', contentTypes[ext] || 'application/octet-stream');
    res.status(200).send(fileContent);
    
  } catch (error) {
    console.error('Error serving file:', error);
    res.status(500).send('Internal server error');
  }
};