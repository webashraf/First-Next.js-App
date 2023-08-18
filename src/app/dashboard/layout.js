import Link from 'next/link';
import React from 'react';

const dashboardLayout = ({children}) => {
    return (
        <div>
            <div className='flex gap-5 underline'>
            <Link href={'/dashboard'}>Dashboard Link</Link>
            <Link href={'/dashboard/product'}>Product</Link>
            </div>
            {children}
        </div>
    );
};

export default dashboardLayout;