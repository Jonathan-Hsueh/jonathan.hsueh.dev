"use client"
import React from "react"
import { BlogPageWrapper } from "@/components/BlogNavigation"
import ReactMarkdown from 'react-markdown';

export default function Home() {
    const navItems = [
        { id: 0, number: '0', text: 'HOME' },
        { id: 1, number: '1', text: 'The Cut Property' },
        { id: 2, number: '2', text: 'Designing a Multi-layer Perceptron' },
        { id: 3, number: '3', text: 'The Technology Research Process' },
        { id: 4, number: '4', text: 'Modeling Breakdancing Moves with Markov Chains' },
        { id: 5, number: '5', text: 'Python Dictionary Introduction' },
        { id: 6, number: '6', text: 'YOLO Algorithms Under the Hood' },
        { id: 7, number: '7', text: 'Casing 101 (For Case Interview)' },
        { id: 8, number: '8', text: 'Event Planning 101' },

      ];
    return (
        <BlogPageWrapper navItems={navItems} >
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden min-w-0">
            <div className="flex flex-col items-center justify-center h-50" >
                <br />
                <h1 
                    className="text-6xl font-black text-sky-950 uppercase tracking-normal leading-none" // tracking normal or tight
                    style={{
                    fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Black", sans-serif',
                    fontStretch: 'condensed'
                    }}
                >
                    Almost Finished!
                </h1>
                <br />
                {/* Secondary text */}
                <h2 
                    className="text-xl text-gray-700 uppercase tracking-normal leading-none"
                    
                >
                    Working on the blog posts, estimated finishing time of January 2026
                </h2>
                </div>
            
            </div>
        </BlogPageWrapper>

    )
    
}