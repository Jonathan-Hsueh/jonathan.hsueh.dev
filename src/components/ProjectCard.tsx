"use client";

import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';

interface ProjectCardProps {
    // x and y pos
    x: number; 
    y: number; 
    // initial width and height of card
    width?: number;
    height?: number;
    // expanded width and height
    expandedWidth?: number;
    expandedHeight?: number;
    // media type: image, video, code
    mediaType: 'image' | 'video' | 'code';
    mediaSrc?: string; // URL for image/video (it has the '?' for )
    codeContent?: string; // For Python/code snippets
    codeLanguage?: string; // 'python', 'javascript', etc. cpp
    // title of project
    title: string;
    description?: string;
    href: string;
    // border color, subject to change
    accentColor?: string; 
    bgGradient?: string;
    // title Card img
    cardImage?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
        x,
        y,
        width = 200,
        height = 200,
        expandedWidth = 600,
        expandedHeight = 400,
        mediaType,
        mediaSrc,
        codeContent,
        codeLanguage = 'python',
        title,
        description,
        href,
        accentColor = '#FFFFFF',
        bgGradient = 'from-white to-white',
        cardImage,
    }) => {
        const [isHovered, setIsHovered] = useState(false);
        const [expandDirection, setExpandDirection] = useState<'left' | 'right'>('right');
        // render image and video using html
        const cardRef = useRef<HTMLDivElement>(null) 
        const videoRef = useRef<HTMLVideoElement>(null) 


        useEffect(() => {
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                const screenWidth = window.innerWidth;

                if (rect.left > screenWidth / 2) {
                    setExpandDirection('left');
                } else {
                    setExpandDirection('right');
                }
            }

        }, [x]);

        useEffect(() => {
            if (videoRef.current) {
                if (isHovered) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause()
                    videoRef.current.currentTime = 0;
                }
            }
        }, [isHovered]);

        const renderMedia = () => {
            switch (mediaType) {
                case 'image':
                    return (
                        <img
                        src={mediaSrc}
                        alt={title}
                        className="w-full h-full object-cover"
                        />
                    );
                case 'video':
                    return (
                        <video
                        ref={videoRef}
                        src={mediaSrc}
                        className="w-full h-full object-cover"
                        // Makes it loop and be muted
                        loop
                        muted
                        playsInline
                        /> 
                    );
                case 'code':
                    return (
                        <div className="w-full h-full overflow-auto bg-gray-900 p-4">
                            <div className="flex items-center gap-2 mb-2">
                                
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-xs text-gray-400">{codeLanguage}</span>
                            </div>
                            <pre className="text-sm text-green-400 font-mono">
                                <code>{codeContent}</code>
                            </pre>
                        </div>
                    );
                }
            };

        return (
            <Link href={href} className="absolute group"> {/* I wonder what absolute group does */}
                <div
                    ref={cardRef}
                    className={`
                    absolute cursor-pointer overflow-hidden rounded-lg
                    transition-all duration-500 ease-out
                    bg-gradient-to-br ${bgGradient}
                    backdrop-blur-sm
                    ${isHovered ? 'shadow-2xl z-50' : 'shadow-lg z-10'}
                    `}
                    style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    width: isHovered ? `${expandedWidth}px` : `${width}px`,
                    height: isHovered ? `${expandedHeight}px` : `${height}px`,
                    transform: isHovered && expandDirection === 'left' 
                        ? `translateX(-${expandedWidth - width}px)` 
                        : 'translateX(0)',
                    border: `3px solid ${accentColor}`,
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Decorative corner accent */}
                    <div 
                    className="absolute top-0 right-0 w-16 h-16 opacity-60"
                    style={{
                        background: `linear-gradient(135deg, transparent 50%, ${accentColor} 50%)`,
                    }}
                    />

                    {/* Content container */}
                    <div className="relative w-full h-full">
                        {/* Collapsed state - just title */}
                        <div
                        className={`
                            absolute inset-0 flex items-center justify-center
                            transition-opacity duration-300
                            ${isHovered ? 'opacity-0' : 'opacity-100'}
                        `}
                        >
                        {cardImage && (<img
                            src={cardImage}
                            alt={title}
                            className="w-full h-full object-cover"
                        />    )}
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                        <h3 
                            className="text-white font-bold text-2xl text-center px-4 z-50"
                        >                        
                            {title}
                        </h3>
                        </div>
                        </div>

                        {/* Expanded state - media + info */}
                        <div
                        className={`
                            absolute inset-0
                            transition-opacity duration-300
                            ${isHovered ? 'opacity-100' : 'opacity-0'}
                        `}
                        >
                        {/* Media */}
                        <div className="w-full h-3/4">
                            {renderMedia()}
                        </div>

                        {/* Info panel */}
                        <div 
                            className="absolute bottom-0 left-0 right-0 h-1/4 p-4"
                            style={{ 
                            background: "white",
                            }}
                        >
                            <h3 className="text-sky-950 font-bold text-xl mb-1">{title}</h3>
                            {description && (
                            <p className="text-gray-700 text-sm line-clamp-2 z-50">{description}</p>
                            )}
                            
                        </div>
                        </div>
                    </div>

                    {/* Animated border effect on hover */}
                    <div
                        className={`
                        absolute inset-0 pointer-events-none
                        transition-opacity duration-500
                        ${isHovered ? 'opacity-100' : 'opacity-0'}
                        `}
                        style={{
                        boxShadow: `inset 0 0 20px ${accentColor}40`,
                        }}
                    />
                </div>
            </Link>  
        )
}



