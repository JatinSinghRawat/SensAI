'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
         setTimeout(() => {
            if (searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchQuery,
                });

                router.push(newUrl, { scroll: false });
            } else {
                if (pathname === '/companions') {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["topic"],
                    });

                    router.push(newUrl, { scroll: false });
                }
            }
        }, 500)
    }, [searchQuery, router, searchParams, pathname]);

    return (
        <div className="relative border border-gray-300 rounded-lg flex items-center gap-2 px-3 py-2 w-full sm:w-64">
            <Image src="/icons/search.svg" alt="search" width={16} height={16} />
            <input
                placeholder="Search companions..."
                className="outline-none w-full bg-transparent text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}
export default SearchInput