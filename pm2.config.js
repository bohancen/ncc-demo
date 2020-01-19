module.exports = {
  apps: [{
    name: "api-server",
    script: "./server_demo.js",
    log_date_format: "YYYY-MM-DD HH:mm:ss.SS",
    // watch       : true,
    env_dev: {
      "NODE_ENV": "development",
      "NODE_PATH": "./build_server_modules",
    },
    env_prod: {
      "NODE_ENV": "production",
      "NODE_PATH": "./build_server_modules",
    }
  }]
}
// use
// pm2 start pm2.config.js --env dev
// pm2 start pm2.config.js --env prod
