// .vscode/launchReactNative.js

const vscode = require('vscode');
const child_process = require('child_process');
const fs = require('fs');

const reactNativePackager = child_process.exec('npx react-native start', {
  cwd: vscode.workspace.rootPath,
});

reactNativePackager.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

reactNativePackager.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

reactNativePackager.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
