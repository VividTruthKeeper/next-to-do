const TaskNav = () => {
  return (
    <div className="px-5 py-2 grid grid-cols-3 gap-2 rounded-[10px] border-b-[4px] w-full border-b-main bg-secondary dark:bg-[#354259] items-center">
      <span className="block justify-self-start text-left text-xl font-bold text-main">
        5 tasks
      </span>
      <button
        type="button"
        className="px-3 py-2 bg-main dark:bg-[#44A0A0] rounded-[10px] text-white font-extrabold transition-all cursor-pointer"
      >
        Add new task
      </button>
      <button
        type="button"
        className="justify-self-end text-right text-xl font-bold text-main cursor-pointer"
      >
        Clear completed
      </button>
    </div>
  );
};

export default TaskNav;
