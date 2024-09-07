import { CardContextProvider } from "@/hooks/Card";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode
}
export function GlobalContext({ children }: IProps) {
    return (
        <CardContextProvider>
            {children}
        </CardContextProvider>
    );
}