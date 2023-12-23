import { ThemeProvider } from "@mui/material";
import AuthProvider from "./(components)/AuthProvider";
import "./globals.css";
import theme from "./Theme/theme";
import Navbar from "./shared/dashboard/navbar";

export const metadata = {
  title: "MPSC Study",
  description: "Create by Shivraj Dange for his sister",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <body>
            <header>
              <Navbar />
            </header>
            <main>
              {children}
            </main>
          </body>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
