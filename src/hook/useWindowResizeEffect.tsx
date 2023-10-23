"use client"

import { useEffect } from 'react';

// Custom hook for handling window resize events
export function useWindowResizeEffect(callback: any, dependencies: any) {
    useEffect(() => {
        const handleResize = () => {
            // Code to run when the window is resized
            console.log('Window resized');
            // Add your custom logic here
            callback();
        };

        // Add the event listener when the component mounts
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component unmounts to avoid memory leaks
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, dependencies); // Dependencies can be an array of values to watch for changes
}
