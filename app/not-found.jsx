'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className="flex flex-col items-center gap-y-6">
                <h3 className='text-3xl md:text-4xl lg:text-5xl leading-tight capitalize'>Page not found</h3>
                <button onClick={() => router.back()} className='btn min-h-14 bg-secondary hover:bg-primary text-white'>
                    <span className='px-6 md:px-8 lg:px-10'>Back To Home</span>
                </button>
            </div>
        </div>
    )
}
