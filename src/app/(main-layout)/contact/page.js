import Link from 'next/link';
import React from 'react';
export const metadata = {
    title: "Contact Page",
    description: "Next JS Practice Project",
  };
const contactPage = () => {
    const ContactItem = [
        {pathname: "/contact/tamim", title: "This is contact of tamim"},
        {pathname: "/contact/shamim", title: "This is contact of shamim"},
        {pathname: "/contact/hamim", title: "This is contact of hamim"}
    ]
    return (
        <div>
            <ul>
                {
                    ContactItem.map(({pathname, title}) => <li key={pathname} className='p-5 my-2 border'>
                        <Link href={pathname}>{title}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default contactPage;