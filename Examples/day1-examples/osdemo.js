import os from 'os';

// os module has functions to find the OS specific details:-

console.log(`Platform: ${os.platform()}`); // Win32
console.log(`Architecture: ${os.arch()}`); // x86, x64
console.log(`Version: ${os.version}`); // 10, 11
console.log(`Hostname: ${os.hostname()}`);