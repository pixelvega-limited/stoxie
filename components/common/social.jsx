import { FaDiscord, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Social({ className }) {
    const socialIcons = [
        {
            name: 'twitter',
            icon: <FaXTwitter />,
            url: 'twitter',
        },
        {
            name: 'instagram',
            icon: <FaInstagram />,
            url: 'instagram`',
        },
        {
            name: 'discord',
            icon: <FaDiscord />,
            url: 'discord',
        },
    ];
    return (
        <div className={`flex items-center flex-wrap gap-4 ${className}`}>
            {socialIcons.map((item, index) => (
                <a
                    key={index}
                    href={item.url}
                    target='_blank'
                    className='social-link size-11 rounded-full border border-solid border-transparent hover:text-primary hover:scale-110 text-white text-xl flex items-center justify-center'>
                    {item.icon}
                </a>
            ))}
        </div>
    );
}

