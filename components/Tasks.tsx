"use client";

import Task from "./Task";
import { v4 } from "uuid";
import { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";

const Tasks = () => {
  const { tasks } = useContext(GlobalContext).tasksContext;
  return (
    <ul className="rounded-[10px] bg-secondary dark:bg-[#354259] flex flex-col overflow-y-auto transition-all">
      {tasks ? (
        tasks.map((task) => (
          <Task
            key={v4()}
            id={task.id}
            category={task.category}
            name={task.name}
            completed={task.completed}
          />
        ))
      ) : (
        <p className="text-white text-center">No Tasks</p>
      )}
    </ul>
  );
};

export default Tasks;
