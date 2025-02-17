/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
