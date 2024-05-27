import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="   ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PagesLayout;
