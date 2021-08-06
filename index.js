require('@babel/register')({
	plugins: ['@babel/plugin-transform-runtime'],
	presets: ['@babel/preset-env', '@babel/preset-typescript'],
});

require('./server.ts');
