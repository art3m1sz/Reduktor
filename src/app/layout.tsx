// app/layout.tsx
import { Flex } from "@chakra-ui/react";

import { fonts } from "./fonts";
import Nav from "./Nav";
import { Providers } from "./providers";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={fonts.inter.variable}>
            <body>
                <Providers>
                    <Nav name=""></Nav>
                    <Flex as="main" pt={"56px"}>
                        {children}
                    </Flex>
                </Providers>
            </body>
        </html>
    );
}
