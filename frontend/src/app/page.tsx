"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProfileSidebar from "@/components/ProfileSidebar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ActivitySection from "@/components/ActivitySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "activity":
        return <ActivitySection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <ProfileSidebar />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}