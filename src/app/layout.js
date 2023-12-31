import "./globals.css";
import { Roboto } from "next/font/google";
import Context from "./component/context/Context";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "LandInfoX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Context>{children}</Context>
      </body>
    </html>
  );
}
