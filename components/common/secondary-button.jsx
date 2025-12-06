import { cn } from '@/lib/utils';
import Link from 'next/link';

const SecondaryButton = ({
    type = 'link',
    onClick,
    LinkTo = '#',
    target = '',
    text = '',
    children,
    className,
    props,
}) => {
    if (type == 'link') {
        return (
            <Link
                {...props}
                href={LinkTo}
                className={cn('btn btn-secondary', className)}
                target={target}>
                <span>{text}</span>
                {children}
            </Link>
        );
    } else {
        return (
            <button
                {...props}
                onClick={onClick}
                className={cn('btn btn-secondary', className)}>
                <span>{text}</span>
                {children}
            </button>
        );
    }
};

export default SecondaryButton;

