/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_W3A_CLIENT_ID: string
  readonly VITE_APP_ANON_AADHAR_APP_ID: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}