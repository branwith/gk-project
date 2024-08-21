// components/CustomLink.tsx

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, MouseEvent } from 'react';

interface CustomLinkProps {
    type: 'submit';
    href: string;
    query?: { [key: string]: any };
    className?: string;
    children: React.ReactNode;
}

const CustomLink: FC<CustomLinkProps> = ({ type, href, query, className, children, ...rest }) => {
    const router = useRouter();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (type === 'submit') {
            const url = new URL(href, window.location.origin);
            if (query) {
                Object.keys(query).forEach(key => url.searchParams.append(key, query[key]));
            }
            router.push(url.toString());
        }
    };

    return (
        <a
            href="#"
            className={`btn bg-emerald-600 hover:bg-emerald-700 
                border-emerald-600 hover:border-emerald-700 
                text-white searchbtn submit-btn w-100 flex items-center justify-center ${className}`}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </a>
    );
};

export default CustomLink;
