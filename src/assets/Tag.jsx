import { Icon } from '@iconify/react';
export const Tag = ({ icon, text, href}) => {
    return (
        
        <a target='blank' href={href} className="flex flex-center-y gap-1 tag bg-primary">
            <Icon className='font-size-2' icon={icon} />
            {text 
                ? <span className="">{text}</span> 
                : ""
            }
            
        </a>
    )
}
