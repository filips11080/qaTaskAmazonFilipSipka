import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "",

  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    specPattern: 'cypress/e2e/**/**.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js', 
    retries: 0,
    watchForFileChanges: false,
    waitForAnimations: true,
    execTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 35000,
    responseTimeout: 35000,
    video: true,
  },
})