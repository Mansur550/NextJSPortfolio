// 'use client';
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// const NavLink = ({ link }) => {
//     const pathName = usePathname();

//     return (
//         <Link className={`rounded p-1 ${pathName === link.url ? "bg-black text-white" : "text-black"}`} href={link.url}>
//             {link.title}

//         </Link>


//     );
// };


// export default NavLink;
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"; // <-- MUST import

const NavLink = ({ link }) => {
    const pathname = usePathname();
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(
            pathname === link.url || (link.url !== "/" && pathname.startsWith(link.url))
        );
    }, [pathname, link.url]);

    return (
        <Link
            href={link.url}
            className={`rounded p-1 transition-colors duration-200 ${active ? "bg-black text-white" : "text-white hover:bg-gray-700"
                }`}
        >
            {link.title}
        </Link>
    );
};

export default NavLink;
