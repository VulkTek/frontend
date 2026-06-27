const { spawnSync } = require('child_process');

if (process.env.WORKERS_CI !== '1') {
  process.exit(0);
}

const result = spawnSync('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

process.exit(result.status ?? 1);
