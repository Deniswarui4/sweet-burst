import { ContactMessage, Event, Invoice, Payment } from "@/lib/db-types";

declare module "@/lib/db" {
  export function query<T = any>(
    strings: TemplateStringsArray,
    ...values: any[]
  ): Promise<T>;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      RESEND_API_KEY: string;
      RESEND_FROM_EMAIL: string;
    }
  }
}

export {};
