// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  expect:{
timeout:5000
  },

  reporter: 'html',
 
  use: {
 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
      trace: 'on-first-retry',
     },
    }

   
  ],


}
});

