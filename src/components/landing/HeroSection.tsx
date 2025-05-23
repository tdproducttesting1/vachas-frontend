
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DashboardPreviewImage from "./DashboardPreviewImage";
import YoutubeEmbed from "./YoutubeEmbed";
import { useState } from "react";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-blue-50 py-24 sm:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="animate-pulse animate-delay-2000 absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="animate-pulse animate-delay-4000 absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="space-y-6 md:w-4/5 lg:w-3/5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              AI-Powered Voice Agents for Smarter Outbound Calling
            </h1>
            <p className="text-xl text-gray-600 md:w-4/5 mx-auto">
              Transform your outbound call campaigns with AI voice agents that sound natural, adapt to conversations, and deliver results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 shadow-lg animate-fade-in">
                <Link to="/dashboard">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 border-gray-300 shadow-md animate-fade-in">
                <Link to="/how-it-works">How It Works</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500 pt-4">
              No credit card required to start
            </p>
          </div>
          
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200 transition-transform duration-300 hover:scale-[1.01] animate-fade-in">
            {!showVideo ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-10"></div>
                <DashboardPreviewImage />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="shadow-lg"
                    onClick={() => setShowVideo(true)}
                  >
                    <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch Demo
                  </Button>
                </div>
              </>
            ) : (
              <YoutubeEmbed videoId="ScMzIvxBSi4" onClose={() => setShowVideo(false)} />
            )}
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 animate-fade-in">
            <div className="flex items-center text-gray-500">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Natural Voice
            </div>
            <div className="flex items-center text-gray-500">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Dynamic Conversations
            </div>
            <div className="flex items-center text-gray-500">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Custom Scripts
            </div>
            <div className="flex items-center text-gray-500">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Post Call Analytics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
