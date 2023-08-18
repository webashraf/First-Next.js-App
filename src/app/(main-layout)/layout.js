import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div>
      <div className="flex gap-3 text-blue-900  underline">
        <Link href={"/"}>Home</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/contact/info"}>Info</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
      {children}
      <div>Footer</div>
    </div>
  );
};

export default layout;
