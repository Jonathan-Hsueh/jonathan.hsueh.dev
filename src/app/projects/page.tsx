"use client"
import React from "react"
import { ImpactPageWrapper } from "@/components/ImpactNavigation"
import { ProjectCard } from "@/components/ProjectCard";
import { MATCHING_CODE } from "@/constants/code";
import { LAMBDA_CODE } from "@/constants/code";

export default function Home() {
    
    const cardImage = "/projects/cdg.png"
    const navItems = [
        { id: 0, number: '0', text: 'UPLADDER' },
        { id: 1, number: '1', text: 'BREAK DETR' },
        { id: 2, number: '2', text: 'SKIN YOLO' },
        { id: 3, number: '3', text: 'SUMMARY' },
        { id: 4, number: '4', text: 'BREAK CHAIN' }
      ];
    return (
        <ImpactPageWrapper navItems={navItems}>
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden min-w-0">
                <div className="flex flex-col items-center justify-center h-50" >
                <br />
                <h1 
                    className="text-5xl font-black text-sky-950 uppercase tracking-normal leading-none" // tracking normal or tight
                    style={{
                    fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Black", sans-serif',
                    fontStretch: 'condensed'
                    }}
                >
                    My Projects
                </h1>
                <br />
                {/* Secondary text */}
                <h2 
                    className="text-xl text-gray-700 uppercase tracking-normal leading-none"
                    
                >
                    Hover to expand 
                </h2>
                <br />
                <h3
                    className="text-sm text-gray-700 uppercase tracking-normal leading-none"
                >
                    Click to explore
                </h3>
                
                </div>
            <section id="section-5" className="snap-start">
            <ProjectCard 
                x={100}
                y={50}
                width={450}
                height={450}
                expandedHeight={450}
                expandedWidth={450}
                mediaType="image"
                mediaSrc="/projects/pUNDERSTANDING.jpg"
                title="Understanding Website Sentiment Analysis"
                description="Engaging frontend using keyframes and typewriting, with eventual sentiment analysis and AWS lambda implementation."
                href="https://understanding-website-krxh.vercel.app/"
                cardImage={cardImage}
            />

            </section>
                <section id="section-4" className="snap-start">
                <ProjectCard 
                x={700}
                y={100}
                width={600}
                height={450}
                expandedHeight={450}
                expandedWidth={600}
                mediaType="image"
                mediaSrc="/projects/pSUMMARY.png"
                title="AI Summarizer for Clinical Settings"
                description="Using vectorstores, maximal marginal relevance, and GPT OSS to summarize patient (MIMIC) notes for clinical settings. Access the jupyter notebook." 
                href="https://colab.research.google.com/drive/1gAIalocGTRC37Fnfp4BMNjdz0i1oJUS8#scrollTo=YdvpN0IfJGtK"
                cardImage={cardImage}
            />

                </section>

            <section id="section-0" className="snap-start"> {/*# I plan on using a custom class, that expands*/}
            <ProjectCard 
                x={650}
                y={650}
                width={550}
                height={500}
                expandedHeight={500}
                expandedWidth={600}
                mediaType="code"
                codeContent={MATCHING_CODE}
                codeLanguage="python"
                title="Improved Linkedin Matching Algorithm for Startups"
                description="Thought experiment for improved matching algorithm, using maximal marginal relevance, sentence-transformers, openai/GPT, and haversine formula." 
                href="https://github.com/Jonathan-Hsueh/Understanding-Website"
                cardImage={cardImage}
            />
            </section>

            <section id="section-1" className="snap-start">
            <ProjectCard 
                x={100}
                y={600}
                width={400}
                height={500}
                expandedHeight={500}
                expandedWidth={400}
                mediaType="image"
                mediaSrc="/projects/fashion.png"
                title="Fashion Chatbot using Data Structures and Algorithms"
                description="Improved algorithm using hash maps and mersenne twisters, and prefix trees and k-means."
                href="https://github.com/Jonathan-Hsueh/Fukaku-Fashion-Chatbot"
                cardImage={cardImage}
            />
            </section>

            <section id="section-2" className="snap-start">
            <ProjectCard 
                x={700}
                y={1400}
                width={550}
                height={450}
                expandedHeight={450}
                expandedWidth={550}
                mediaType="video"
                mediaSrc="/projects/gun_detection.mp4"
                title="YOLO For Firearm Localization and Classification"
                description="Using YOLOv11 to detect firearms, part of my published research on object detection."
                href="https://github.com/Jonathan-Hsueh/YOLO-Object-Detection-Website#"
                cardImage={cardImage}
            />
            </section>
            <section id="section-3" className="snap-start">
            <ProjectCard 
                x={80}
                y={1300}
                width={500}
                height={600}
                expandedHeight={600}
                expandedWidth={550}
                mediaType="code"
                codeContent={LAMBDA_CODE}
                title="Understand Website AWS Lambda Backend"
                description="Using GPT-OSS 20B, embedding, sentiment, and intensity models from hugging face API for maximal marginal retrieval, for understanding public opinions."
                href="https://github.com/Jonathan-Hsueh/Sentiment-Analysis-Lambda/blob/main/public/lambda_function.py"
                cardImage={cardImage}
            />
            </section>
            <section id="section-7">
                    {/*add an extra spacer at the bottom to absorb the growth of the images*/}
            </section>
            </div>
        </ImpactPageWrapper>
    )
    
}