/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'export', // Export as static HTML pages to /out
	basePath: '/website', // Fix relative paths in exported files
	assetPrefix: '/website', // Fix relative paths in exported files
	images: {
		loader: 'custom',
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
	},
	transpilePackages: ['next-image-export-optimizer'],
	env: {
		nextImageExportOptimizer_imageFolderPath: 'public/images',
		nextImageExportOptimizer_exportFolderPath: 'out',
		nextImageExportOptimizer_quality: 70,
		nextImageExportOptimizer_storePicturesInWEBP: 'true',
		nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',

		// If you do not want to use blurry placeholder images, then you can set
		// nextImageExportOptimizer_generateAndUseBlurImages to false and pass
		// `placeholder="empty"` to all <ExportedImage> components.
		nextImageExportOptimizer_generateAndUseBlurImages: 'true',

		NEXT_PUBLIC_BASE_PATH:
			process.env.NODE_ENV === 'production' ? '/website' : ''
	}

	// // Forward old /projects/openad to standalone website
	// // Not possible due to output: 'export' We're using a
	// // vercel redirect via vercel.json, plus a JS redirect
	// // with a custom template as a fallback.
	// async redirects() {
	// 	return [
	// 		{
	// 			source: '/projects/openad',
	// 			destination: 'https://openad.accelerate.science',
	// 			permanent: false
	// 		}
	// 	]
	// }
}

module.exports = nextConfig
