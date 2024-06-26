import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      '@lib': '/src/lib',
      '@utils': '/src/utils',
      '@components': '/src/components',
      '@layouts': '/src/layouts',
      '@assets': '/src/assets',
      '@stores': '/src/stores',
      '@pages': '/src/pages'
    },
  },
});
