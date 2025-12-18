/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GEMINI_API_KEY?: string;
  readonly API_KEY?: string;
  readonly USE_IMPORTMAP?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Declare process.env for Vite's define replacements
declare var process: {
  env: {
    API_KEY?: string;
    GEMINI_API_KEY?: string;
    USE_IMPORTMAP?: string;
  };
}
