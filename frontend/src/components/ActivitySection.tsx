"use client";

import { useState } from "react";
import { Heart, MessageCircle, Share, ThumbsUp, BookOpen, Code, Award } from "lucide-react";

export default function ActivitySection() {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const toggleLike = (postId: number) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
  };

  const posts = [
    {
      id: 1,
      type: "achievement",
      title: "Completed Google TensorFlow Developer Certificate! 🎉",
      content: "Just finished the Google TensorFlow Developer Certificate exam. The course covered deep learning fundamentals, computer vision, and natural language processing. Excited to apply these skills to real-world projects!",
      author: "Mahad Wajid",
      time: "2 hours ago",
      likes: 24,
      comments: 8,
      shares: 3,
      icon: Award,
      iconColor: "text-yellow-500"
    },
    {
      id: 2,
      type: "project",
      title: "New Project: Autonomous Vehicle Object Detection",
      content: "Published my latest project on GitHub - a real-time object detection system for autonomous vehicles using YOLOv8. Achieved 95% accuracy on COCO dataset with 30 FPS inference speed. Check out the demo!",
      author: "Mahad Wajid",
      time: "1 day ago",
      likes: 18,
      comments: 12,
      shares: 5,
      icon: Code,
      iconColor: "text-blue-500"
    },
    {
      id: 3,
      type: "learning",
      title: "Attended AI Conference 2024",
      content: "Amazing experience at the AI Conference 2024! Learned about the latest developments in transformer architectures, multimodal AI, and ethical AI practices. The keynote on GPT-4's capabilities was particularly insightful.",
      author: "Mahad Wajid",
      time: "3 days ago",
      likes: 31,
      comments: 15,
      shares: 7,
      icon: BookOpen,
      iconColor: "text-green-500"
    },
    {
      id: 4,
      type: "insight",
      title: "Thoughts on the Future of Computer Vision",
      content: "Computer vision is evolving rapidly with the integration of transformer architectures. Vision Transformers (ViTs) are showing promising results, but CNNs still have their place in many applications. The key is choosing the right tool for the right problem.",
      author: "Mahad Wajid",
      time: "1 week ago",
      likes: 42,
      comments: 23,
      shares: 9,
      icon: BookOpen,
      iconColor: "text-purple-500"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Recent Activity</h1>
        <p className="text-gray-600">
          Updates, insights, and achievements from my AI/ML journey.
        </p>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post) => {
          const Icon = post.icon;
          const isLiked = likedPosts.has(post.id);
          
          return (
            <div key={post.id} className="card hover:shadow-md transition-shadow">
              {/* Post Header */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">MW</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{post.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Icon className={`w-4 h-4 ${post.iconColor}`} />
                    <span className="text-sm text-gray-600 capitalize">{post.type}</span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <h2 className="font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-700 leading-relaxed">{post.content}</p>
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-colors ${
                      isLiked 
                        ? "bg-red-50 text-red-600" 
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                    <span className="text-sm font-medium">
                      {isLiked ? post.likes + 1 : post.likes}
                    </span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-3 py-1 rounded-full text-gray-500 hover:bg-gray-50 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">{post.comments}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-3 py-1 rounded-full text-gray-500 hover:bg-gray-50 transition-colors">
                    <Share className="w-4 h-4" />
                    <span className="text-sm font-medium">{post.shares}</span>
                  </button>
                </div>

                <button className="flex items-center space-x-2 px-3 py-1 rounded-full text-gray-500 hover:bg-gray-50 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">React</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="btn-secondary">
          Load More Activity
        </button>
      </div>
    </div>
  );
}
