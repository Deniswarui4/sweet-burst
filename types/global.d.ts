// This file ensures TypeScript understands our module paths
declare module '@/lib/*' {
  const value: any;
  export default value;
}

declare module '@/components/*' {
  const value: any;
  export default value;
}

declare module '@/app/*' {
  const value: any;
  export default value;
}

// Add type declarations for environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    RESEND_API_KEY: string;
    RESEND_FROM_EMAIL: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }
}
