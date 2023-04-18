import { Inter } from "next/font/google";
import "react-color-palette/lib/css/styles.css";

const inter = Inter({ subsets: ["latin"] });

import AppTitle from "@/components/AppTitle";
import ThemeButton from "@/components/ThemeButton";
import Categories from "@/components/Categories";
import AddCategory from "@/components/AddCategory";
import TaskNav from "@/components/TaskNav";
import Tasks from "@/components/Tasks";

const Home = () => {
  return (
    <main className="bg-[#F7ECDE] dark:bg-[#1C273C] transition-all min-h-screen min-w-max">
      <ThemeButton />
      <AddCategory />
      <div className="container">
        <div className="inner pt-20 pb-8 flex flex-col gap-28">
          <AppTitle />
          <div className="flex gap-3">
            <Categories />
            <div className="flex flex-col gap-2 w-full">
              <TaskNav />
              <Tasks />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
