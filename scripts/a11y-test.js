import { AxePuppeteer } from '@axe-core/puppeteer';
import puppeteer from 'puppeteer';
import chalk from 'chalk';

// URLs to test
const urls = [
  'http://localhost:5173/',
  'http://localhost:5173/about',
  'http://localhost:5173/universities',
  'http://localhost:5173/news',
  'http://localhost:5173/resources',
  'http://localhost:5173/contact',
  'http://localhost:5173/nouveaux-bacheliers'
];

// Test options
const options = {
  runOnly: {
    type: 'tag',
    values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice']
  }
};

async function testAccessibility() {
  console.log(chalk.blue.bold('Starting accessibility tests...'));
  
  const browser = await puppeteer.launch();
  let hasViolations = false;
  
  for (const url of urls) {
    console.log(chalk.cyan(`Testing ${url}`));
    const page = await browser.newPage();
    
    try {
      await page.setBypassCSP(true);
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait for any lazy-loaded content
      await page.waitForTimeout(2000);
      
      // Run axe
      const results = await new AxePuppeteer(page).options(options).analyze();
      
      if (results.violations.length > 0) {
        hasViolations = true;
        console.log(chalk.red.bold(`\n${results.violations.length} accessibility violations found on ${url}:`));
        
        results.violations.forEach((violation, index) => {
          console.log(chalk.red(`\n${index + 1}. ${violation.id}: ${violation.help}`));
          console.log(chalk.yellow(`   Impact: ${violation.impact}`));
          console.log(chalk.gray(`   ${violation.helpUrl}`));
          
          violation.nodes.forEach(node => {
            console.log(chalk.gray(`   - ${node.html}`));
            console.log(chalk.gray(`     ${node.failureSummary}`));
          });
        });
      } else {
        console.log(chalk.green(`✓ No accessibility violations found on ${url}`));
      }
    } catch (error) {
      console.error(chalk.red(`Error testing ${url}: ${error.message}`));
      hasViolations = true;
    } finally {
      await page.close();
    }
  }
  
  await browser.close();
  
  if (hasViolations) {
    console.log(chalk.red.bold('\nAccessibility tests failed. Please fix the issues above.'));
    process.exit(1);
  } else {
    console.log(chalk.green.bold('\nAll accessibility tests passed!'));
  }
}

// Check if server is running first
async function checkServerRunning() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/', { timeout: 5000 });
    await browser.close();
    return true;
  } catch (error) {
    console.error(chalk.red.bold('Error: Development server is not running. Please start it with "npm run dev" first.'));
    return false;
  }
}

// Run the tests
(async () => {
  const isServerRunning = await checkServerRunning();
  if (isServerRunning) {
    await testAccessibility();
  } else {
    process.exit(1);
  }
})();
