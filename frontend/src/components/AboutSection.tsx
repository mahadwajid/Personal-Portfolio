"use client";

import { Calendar, Award, BookOpen, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const experience = [
    {
      title: "Senior AI/ML Engineer",
      company: "TechCorp AI",
      duration: "2022 - Present",
      description: "Leading machine learning initiatives and developing computer vision solutions for autonomous systems.",
      achievements: ["Improved model accuracy by 25%", "Reduced inference time by 40%", "Led team of 5 engineers"]
    },
    {
      title: "Data Scientist",
      company: "DataFlow Inc",
      duration: "2020 - 2022",
      description: "Built predictive models and NLP solutions for enterprise clients.",
      achievements: ["Deployed 10+ ML models", "Increased revenue by $2M", "Mentored junior data scientists"]
    },
    {
      title: "ML Engineer",
      company: "StartupXYZ",
      duration: "2019 - 2020",
      description: "Developed recommendation systems and computer vision applications.",
      achievements: ["Built real-time recommendation engine", "Achieved 95% user satisfaction", "Scaled to 1M+ users"]
    }
  ];

  const skills = [
    { name: "Python", level: 95, category: "Programming" },
    { name: "TensorFlow", level: 90, category: "ML Frameworks" },
    { name: "PyTorch", level: 88, category: "ML Frameworks" },
    { name: "scikit-learn", level: 92, category: "ML Libraries" },
    { name: "OpenCV", level: 85, category: "Computer Vision" },
    { name: "BERT/GPT", level: 80, category: "NLP" },
    { name: "AWS ML", level: 87, category: "Cloud" },
    { name: "Docker", level: 83, category: "DevOps" },
    { name: "SQL", level: 90, category: "Databases" },
    { name: "Git", level: 88, category: "Version Control" }
  ];

  const certifications = [
    {
      name: "Google TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      credential: "Credential ID: 123456789"
    },
    {
      name: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2022",
      credential: "Credential ID: AWS-ML-987654321"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2021",
      credential: "Coursera Certificate"
    },
    {
      name: "Advanced Computer Vision",
      issuer: "Stanford University",
      date: "2021",
      credential: "Online Course Certificate"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="card bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            AI/ML Engineer & Data Scientist
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Passionate about building intelligent systems that solve real-world problems. 
            Specializing in Computer Vision, Natural Language Processing, and Predictive Analytics 
            with expertise in Python, TensorFlow, and PyTorch.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full">Computer Vision</span>
            <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full">NLP</span>
            <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full">Deep Learning</span>
            <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full">Predictive Analytics</span>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-yellow-500" />
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-200 last:border-l-0">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">{job.title}</h3>
                <p className="text-yellow-600 font-medium">{job.company}</p>
                <p className="text-gray-500 text-sm mb-2">{job.duration}</p>
                <p className="text-gray-700 mb-3">{job.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-yellow-500" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(
            skills.reduce((acc, skill) => {
              if (!acc[skill.category]) acc[skill.category] = [];
              acc[skill.category].push(skill);
              return acc;
            }, {} as Record<string, typeof skills>)
          ).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
              <div className="space-y-3">
                {categorySkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Award className="w-6 h-6 mr-2 text-yellow-500" />
          Certifications & Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
              <p className="text-yellow-600 text-sm font-medium mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-xs mb-2">{cert.credential}</p>
              <div className="flex items-center text-gray-500 text-xs">
                <Calendar className="w-3 h-3 mr-1" />
                {cert.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
