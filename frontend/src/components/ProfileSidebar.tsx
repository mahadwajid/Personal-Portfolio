"use client";

import { MapPin, Users, Github, Linkedin, Mail, Download } from "lucide-react";

export default function ProfileSidebar() {
  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="card">
        <div className="text-center">
          {/* Avatar */}
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">MW</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-xl font-bold text-gray-900 mb-1">Mahad Wajid</h1>
          <p className="text-yellow-600 font-medium mb-2">AI/ML Engineer & Data Scientist</p>
          
          {/* Location */}
          <div className="flex items-center justify-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">San Francisco, CA</span>
          </div>

          {/* Connections */}
          <div className="flex items-center justify-center text-gray-600 mb-6">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">500+ connections</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button className="btn-primary w-full">
              <Download className="w-4 h-4 mr-2 inline" />
              Download Resume
            </button>
            <button className="btn-secondary w-full">
              <Mail className="w-4 h-4 mr-2 inline" />
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Skills Preview */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Top Skills</h3>
        <div className="space-y-3">
          {[
            { skill: "Python", level: 95 },
            { skill: "TensorFlow", level: 90 },
            { skill: "PyTorch", level: 88 },
            { skill: "Computer Vision", level: 85 },
            { skill: "NLP", level: 82 },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">{item.skill}</span>
                <span className="text-gray-500">{item.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
        <div className="space-y-3">
          <a 
            href="https://github.com/mahadwajid" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-5 h-5 mr-3" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/mahadwajid" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-5 h-5 mr-3" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:mahad@example.com" 
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="w-5 h-5 mr-3" />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
            <div>
              <p className="text-gray-700">Published new project on GitHub</p>
              <p className="text-gray-500 text-xs">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
            <div>
              <p className="text-gray-700">Completed TensorFlow certification</p>
              <p className="text-gray-500 text-xs">1 day ago</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
            <div>
              <p className="text-gray-700">Attended AI conference</p>
              <p className="text-gray-500 text-xs">3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
