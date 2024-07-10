"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return <p> {pathname}</p>;
//the usePathname() returns the path name of the current route
}