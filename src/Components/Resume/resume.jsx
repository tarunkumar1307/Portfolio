import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="geist-mono bg-[#0E1325] text-white py-16 px-6 md:px-20 min-h-screen">
      {/* Back Button */}
      <div className="mb-8">
        <Link to="/" className="text-white text-sm border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
          ← Back to Home
        </Link>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Resume</h2>
      <div className="flex justify-center gap-6 mt-12">
      <a 
  href="/src/assets/Tarun Kumar CV.pdf" 
  download="Tarun_Kumar_Resume.pdf"
  className="text-white py-3 px-6 text-lg bg-[#465697] rounded-3xl hover:bg-[#374d7a] transition"
>
  Download CV
</a>

      </div>
      {/* Training Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 border-b-2 border-white pb-2">Training</h3>
        <div className="space-y-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <h4 className="text-xl font-bold flex justify-between items-center">
              Data Structure and Algorithm using C++
              <span className="text-sm text-gray-200">Jun' 2024 - Jul' 2024</span>
            </h4>
            <p className="text-sm text-gray-200 mb-3">Conducted by Spruce and Powered by Hitbullseye</p>
            <ul className="list-disc ml-6 mt-3 text-sm space-y-1">
              <li>Implemented and optimized fundamental data structures such as arrays, linked lists, stacks, queues, and trees.</li>
              <li>Designed and analyzed various algorithmic approaches, including Sorting (Quick Sort, Merge Sort), Searching (Binary Search), Greedy Algorithm, and Dynamic Programming.</li>
              <li>Applied advanced problem-solving techniques and optimized algorithm complexity, enhancing computational efficiency.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education History */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 border-b-2 border-white pb-2">Education</h3>
        <div className="space-y-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex justify-between items-center">
            <div>
              <h4 className="text-xl font-bold">B.Tech in Computer Science Engineering</h4>
              <p className="text-sm text-gray-200">Lovely Professional University</p>
              <p className="mt-2 text-sm">CGPA: 7.66</p>
            </div>
            <div>
              <p className="text-sm text-gray-200">2022 - Present</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex justify-between items-center">
            <div>
              <h4 className="text-xl font-bold">Intermediate (12th Grade)</h4>
              <p className="text-sm text-gray-200">St. Xavier's School, Bhiwadi</p>
              <p className="mt-2 text-sm">Grade: 88%</p>
            </div>
            <div>
              <p className="text-sm text-gray-200">2021-2022</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex justify-between items-center">
            <div>
              <h4 className="text-xl font-bold">Metriculation (10th Grade)</h4>
              <p className="text-sm text-gray-200">St. Xavier's School, Bhiwadi</p>
              <p className="mt-2 text-sm">Grade: 90%</p>
            </div>
            <div>
              <p className="text-sm text-gray-200">2019-2020</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Resume;
