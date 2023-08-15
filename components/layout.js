import Alert from "@/components/alert";
import FG from "@/components/alert";
import Meta from "@/components/meta";
import Footer from "@/components/footer";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
