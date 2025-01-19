import { createContext, ReactNode } from "react";
import { FlashMessageType } from "../interfaces/flashMessage.interface";

export const FlashMessageContext = createContext<{
  showMessage: (message: ReactNode, type: FlashMessageType, duration?: number) => void;
} | null>(null);