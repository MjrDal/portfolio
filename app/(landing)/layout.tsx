import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col items-center bg-black ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PagesLayout;
