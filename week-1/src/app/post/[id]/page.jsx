"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return(
    <div>
        <p>
        {pathname}
        </p>
    </div>
);
//the usePathname() returns the path name of the current route
}