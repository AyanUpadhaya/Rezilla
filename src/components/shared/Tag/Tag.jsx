import React from 'react'

const Tag = ({bgcolor,svg,textColor,status}) => {
    return (
        <div className={`absolute bottom-6 left-6 ${bgcolor} py-[10px] px-6 rounded-[20px] flex gap-2 items-center`}>
            <span>
               {svg}
            </span>
            <span className={`text-base font-semilessbold ${textColor}`}>{status}</span>

        </div>
    )
}

export default Tag