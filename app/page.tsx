import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

import AppTitle from "@/components/AppTitle";
import ThemeButton from "@/components/ThemeButton";

const Home = () => {
  return (
    <main className="bg-[#F7ECDE] dark:bg-[#1C273C] transition-all min-h-screen min-w-max">
      <ThemeButton />
      <div className="container">
        <div className="inner pt-20 pb-8">
          <AppTitle />
        </div>
      </div>
    </main>
  );
};

export default Home;
