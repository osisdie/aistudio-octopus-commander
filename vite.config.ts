/// <reference types="node" />
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const useImportmap = env.USE_IMPORTMAP === 'true';
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // Conditionally inject importmap for Google AI Studio
        {
          name: 'inject-importmap',
          transformIndexHtml(html) {
            if (useImportmap) {
              const importmap = `
  <script type="importmap">
{
  "imports": {
    "@google/genai": "https://esm.sh/@google/genai@^1.34.0",
    "react/": "https://esm.sh/react@^19.2.3/",
    "react": "https://esm.sh/react@^19.2.3",
    "react-dom/": "https://esm.sh/react-dom@^19.2.3/"
  }
}
</script>`;
              return html.replace(
                '<!-- This is conditionally injected by Vite based on USE_IMPORTMAP env var -->',
                importmap
              );
            }
            return html;
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.USE_IMPORTMAP': JSON.stringify(useImportmap)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
