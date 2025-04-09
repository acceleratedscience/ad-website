/** @type {import('next').NextConfig} */
const nextConfig = {
	// TODO: figure out how to run prod build locally with basepath: localhost:3000/ad-website
	// This is not working as intended, abandoned for now
	// basePath: process.env.NODE_ENV === 'production' ? '/ad-website' : '',

	// Prefix for images, JS, CSS
	assetPrefix: process.env.NODE_ENV === 'production' ? '/ad-website' : '',

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

		// Prefix for static image paths
		NEXT_PUBLIC_BASE_PATH:
			process.env.NODE_ENV === 'production' ? '/ad-website' : ''
	}

	// Forward old /projects/openad to new standalone website
	// - - -
	// Not possible because our build relies on output: 'export'
	// which is incompatible with server-side redirects.
	// We have a hardcoded JS redirect instead at app/projects/openad/page.tsx
	// async redirects() {
	// 	return [
	// 		{
	// 			source: '/projects/openad',
	// 			destination: 'https://openad.accelerate.science',
	// 			permanent: true
	// 		}
	// 	]
	// }
}

module.exports = nextConfig
