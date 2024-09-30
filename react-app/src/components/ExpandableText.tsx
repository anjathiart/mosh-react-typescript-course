import { useState } from 'react'

interface ExpandableTextProps {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
    if (children.length <= maxChars) return <p>{children}</p>;
    
    const shortText = children.substring(0, maxChars).trim() + '...';
    const [isExpanded, setIsExpanded] = useState(false);
    const text = isExpanded ? children : shortText;
    

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <p>{text}</p>
            <button onClick={handleClick}>{ isExpanded ? 'Less' : 'More' }</button>
        </>
    )
}

export default ExpandableText;