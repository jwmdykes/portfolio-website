import React from "react";

export default function Container(props: {children: React.ReactNode}) {
    return (
        <div className='container'>
            <div className='flex flex-col md:flex-row text-body-text-color justify-between gap-4 md:gap-20'>
                {props.children}
            </div>
        </div>
    )
}