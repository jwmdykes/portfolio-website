/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    webpack: (config, { buildId, dev }) => {
        const newConfig = config;

        if (!dev && newConfig.output.filename.startsWith('static')) {
            newConfig.output.filename = newConfig.output.filename.replace('[name]', `[name]-${buildId}`);
            newConfig.output.chunkFilename = newConfig.output.chunkFilename.replace('[name]', `[name]-${buildId}`);
        }

        return newConfig;
    },
    generateBuildId: async () => {
        const timestamp = Math.floor(Date.now() / 1000);
        return `build-${timestamp}`;
    },
}

module.exports = nextConfig
