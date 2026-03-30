// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const  config=({
  testDir: './tests',
  timeout : 50*1000,
 expect:{
  timeout:5000  // overall test 40 sec sathi wait karnar

 },
 use:{
browserName: 'chromium',
headless : false,

 },
 reporter : 'html',
  
 /* projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    
  ], */
}); 
module.exports=config;

