import type { NextConfig } from "next";

import mdx from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

const withMDX = mdx({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
});

export default nextConfig;
