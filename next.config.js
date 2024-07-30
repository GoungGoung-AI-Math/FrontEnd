const nextConfig = {
  reactStrictMode: false,
  // 기타 설정들...
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

export default nextConfig;
