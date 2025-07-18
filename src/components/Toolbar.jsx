import UserAddButton from "./UserAddButton";

const Toolbar = () => {
  return (
    <div className="flex w-full sticky top-0 z-10 py-4 px-6 border-b bg-slate-300">
      <UserAddButton className="p-2 rounded-md ring" />
    </div>
  );
};

export default Toolbar;
