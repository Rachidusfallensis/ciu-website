import { exec } from 'child_process';
import chalk from 'chalk';

console.log(chalk.blue.bold('Starting security audit of dependencies...'));

// Run npm audit
exec('npm audit --json', (error, stdout, stderr) => {
  if (error) {
    try {
      const auditData = JSON.parse(stdout);
      
      // Check if there are vulnerabilities
      if (auditData.vulnerabilities) {
        const { low, moderate, high, critical } = auditData.metadata.vulnerabilities;
        
        console.log(chalk.yellow.bold(`\nVulnerabilities found:`));
        console.log(chalk.grey(`Low: ${low}`));
        console.log(chalk.yellow(`Moderate: ${moderate}`));
        console.log(chalk.red(`High: ${high}`));
        console.log(chalk.bgRed.white(`Critical: ${critical}`));
        
        // Display details for high and critical vulnerabilities
        if (high > 0 || critical > 0) {
          console.log(chalk.red.bold('\nHigh or Critical Vulnerabilities:'));
          
          Object.values(auditData.vulnerabilities).forEach(vuln => {
            if (vuln.severity === 'high' || vuln.severity === 'critical') {
              console.log(chalk[vuln.severity === 'critical' ? 'bgRed' : 'red'].bold(
                `\n${vuln.name}@${vuln.range}`
              ));
              console.log(chalk.white(`Severity: ${vuln.severity}`));
              console.log(chalk.white(`Title: ${vuln.title}`));
              console.log(chalk.white(`URL: ${vuln.url}`));
              console.log(chalk.white(`Path: ${vuln.path.join(' > ')}`));
              
              if (vuln.fixAvailable) {
                if (typeof vuln.fixAvailable === 'object') {
                  console.log(chalk.green(`Fix available: Update to ${vuln.fixAvailable.name}@${vuln.fixAvailable.version}`));
                } else {
                  console.log(chalk.green('Fix available: Run npm audit fix'));
                }
              } else {
                console.log(chalk.yellow('No automatic fix available'));
              }
            }
          });
        }
        
        // Provide recommendations
        console.log(chalk.blue.bold('\nRecommendations:'));
        if (high > 0 || critical > 0) {
          console.log(chalk.yellow('- Run `npm audit fix` to fix automatically fixable issues'));
          console.log(chalk.yellow('- Run `npm audit fix --force` to force updates (may include breaking changes)'));
          console.log(chalk.yellow('- Review and update dependencies manually where needed'));
        } else if (moderate > 0) {
          console.log(chalk.green('- Consider running `npm audit fix` to address moderate issues'));
        } else {
          console.log(chalk.green('- No significant issues found. Good job!'));
        }
      } else {
        console.log(chalk.green.bold('\nNo vulnerabilities found. All dependencies are secure!'));
      }
    } catch (parseError) {
      console.error(chalk.red('Error parsing npm audit output:'), parseError);
      console.error(chalk.grey('Raw output:'), stdout);
    }
  } else {
    console.log(chalk.green.bold('\nNo vulnerabilities found. All dependencies are secure!'));
  }
  
  // Also check for outdated packages
  console.log(chalk.blue.bold('\nChecking for outdated packages...'));
  exec('npm outdated --json', (outdatedError, outdatedStdout) => {
    try {
      if (outdatedStdout && outdatedStdout.trim() !== '') {
        const outdatedData = JSON.parse(outdatedStdout);
        const outdatedCount = Object.keys(outdatedData).length;
        
        if (outdatedCount > 0) {
          console.log(chalk.yellow.bold(`\n${outdatedCount} outdated packages found:`));
          
          Object.entries(outdatedData).forEach(([pkg, info]) => {
            const updateType = 
              info.current.split('.')[0] !== info.latest.split('.')[0] ? 'Major' :
              info.current.split('.')[1] !== info.latest.split('.')[1] ? 'Minor' : 'Patch';
            
            const color = 
              updateType === 'Major' ? 'red' :
              updateType === 'Minor' ? 'yellow' : 'green';
            
            console.log(
              chalk[color](`${pkg}: ${info.current} → ${info.latest} (${updateType} update)`)
            );
          });
          
          console.log(chalk.blue.bold('\nConsider updating these packages to get the latest features and security fixes.'));
        } else {
          console.log(chalk.green.bold('All packages are up to date!'));
        }
      } else {
        console.log(chalk.green.bold('All packages are up to date!'));
      }
    } catch (parseError) {
      console.error(chalk.red('Error parsing npm outdated output:'), parseError);
    }
  });
});
