import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mahad Wajid | AI/ML Engineer & Data Scientist',
  description: 'AI/ML Engineer specializing in Computer Vision, NLP, and Predictive Analytics. Building intelligent solutions with Python, TensorFlow, and PyTorch.',
  keywords: 'AI, Machine Learning, Data Science, Computer Vision, NLP, Python, TensorFlow, PyTorch',
  authors: [{ name: 'Mahad Wajid' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}