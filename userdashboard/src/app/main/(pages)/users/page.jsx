import UserTable from "./compononts/UserTable";

export default function Producs() {
  return (
    <div className="overflow-hidden h-full bg-white p-5 m-5">
      <h1 className="text-2xl font-bold mb-4 text-black ">Users </h1>
      <UserTable />
    </div>
  );
}
