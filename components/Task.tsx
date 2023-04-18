"use client";
import { useContext } from "react";
import { ITask } from "@/typings/task.type";
import Image from "next/image";
import Category from "./Category";
import GlobalContext from "@/context/GlobalContext";

const Task = ({ category, name, completed, id }: ITask) => {
  const { tasks, setTasks } = useContext(GlobalContext).tasksContext;

  const handleMarkCompleted = (id: ITask["id"]) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        task.completed = true;
      }
    });
    const newTasks = [...tasks];
    setTasks(newTasks);
  };

  const handleMarkUncompleted = (id: ITask["id"]) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        task.completed = false;
      }
    });
    const newTasks = [...tasks];
    setTasks(newTasks);
  };

  return (
    <li className="grid grid-cols-custom gap-3 px-5 py-6 border-b border-b-white">
      <span className="rounded-full w-[30px] y-[30px] relative cursor-pointer">
        <Image
          src="/check.svg"
          unoptimized
          unselectable="off"
          alt="check"
          width={30}
          height={30}
          className={`transition-all absolute top-0 left-0 z-10 ${
            completed ? "opacity-100" : "opacity-0"
          }`}
          style={{ pointerEvents: completed ? "all" : "none" }}
          onClick={() => handleMarkUncompleted(id)}
        />
        <Image
          src="/check-empty.svg"
          unoptimized
          alt="check"
          width={30}
          height={30}
          className="absolute"
          onClick={() => handleMarkCompleted(id)}
        />
      </span>
      <p className="text-white text-xl">{name}</p>
      <Category
        color={category.color}
        title={category.title}
        trashable={false}
      />
    </li>
  );
};

export default Task;
