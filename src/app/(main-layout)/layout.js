import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto border">
      <div className="flex gap-3 text-blue-900  underline">
        <Navbar></Navbar>
      </div>
      <div className="px-10">
      {children}
      </div>
      <div>Footer</div>
    </div>
  );
};

export default layout;
