"use client";

import { Github, ExternalLink, Star, Eye } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Autonomous Vehicle Object Detection",
      description: "Real-time object detection system for autonomous vehicles using YOLOv8 and TensorFlow. Achieved 95% accuracy on COCO dataset with 30 FPS inference speed.",
      image: "/api/placeholder/400/250",
      tech: ["Python", "TensorFlow", "OpenCV", "YOLOv8", "CUDA"],
      github: "https://github.com/mahadwajid/autonomous-detection",
      demo: "https://demo.mahad.dev/object-detection",
      stats: { stars: 234, views: 1200 }
    },
    {
      title: "Medical Image Analysis with Deep Learning",
      description: "CNN-based system for detecting anomalies in X-ray images. Built with PyTorch and deployed on AWS with 98% accuracy on chest X-ray dataset.",
      image: "/api/placeholder/400/250",
      tech: ["Python", "PyTorch", "AWS", "Docker", "FastAPI"],
      github: "https://github.com/mahadwajid/medical-ai",
      demo: "https://medical-ai.mahad.dev",
      stats: { stars: 189, views: 890 }
    },
    {
      title: "Sentiment Analysis API",
      description: "RESTful API for sentiment analysis using BERT and RoBERTa models. Handles 10K+ requests per minute with 92% accuracy on social media data.",
      image: "/api/placeholder/400/250",
      tech: ["Python", "BERT", "FastAPI", "Redis", "PostgreSQL"],
      github: "https://github.com/mahadwajid/sentiment-api",
      demo: "https://api.mahad.dev/sentiment",
      stats: { stars: 156, views: 750 }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">AI/ML Projects</h1>
        <p className="text-gray-600">
          Showcasing my latest work in machine learning, computer vision, and natural language processing.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card hover:shadow-lg transition-shadow duration-300 group">
            {/* Project Image */}
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-white">AI</span>
                  </div>
                  <p className="text-gray-500 text-sm">Project Preview</p>
                </div>
              </div>
              <div className="absolute top-2 right-2 flex space-x-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-1">
                  <Eye className="w-4 h-4 text-blue-500" />
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-yellow-100 hover:text-yellow-800 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {project.stats.stars}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {project.stats.views}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Projects */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Stock Price Prediction Model",
              description: "LSTM-based model for predicting stock prices with 85% accuracy",
              tech: ["Python", "LSTM", "Pandas", "Scikit-learn"]
            },
            {
              title: "Facial Recognition System",
              description: "Real-time facial recognition using OpenCV and face_recognition library",
              tech: ["Python", "OpenCV", "face_recognition", "Flask"]
            },
            {
              title: "Chatbot with NLP",
              description: "Intelligent chatbot using BERT and transformer models",
              tech: ["Python", "BERT", "Transformers", "FastAPI"]
            },
            {
              title: "Recommendation Engine",
              description: "Collaborative filtering recommendation system for e-commerce",
              tech: ["Python", "Surprise", "Pandas", "Flask"]
            }
          ].map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
