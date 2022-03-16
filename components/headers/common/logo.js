import React, { Fragment } from 'react';
import Link from 'next/link';

const LogoImage = ({ logo }) => {
    return (
        <>
            <Link href={'/'} >
                <a>
                    <img src={`/assets/images/icon/${logo?logo:'logo.png'}`} alt="" className="width-logo" />
                </a>
            </Link>
        </>
    )
}

export default LogoImage;