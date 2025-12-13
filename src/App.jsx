import React from 'react';
import { ReactTyped } from "react-typed";
import Prompt from './components/Prompt';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">

      {/* --- HEADER SECTION --- */}
      <header className="mb-12">
        <Prompt command="./init_sequence.sh" />
        <div className="text-lg md:text-xl pl-4 border-l-2 border-term-gray/30">
          <ReactTyped
            strings={[
              "Initializing system...",
              "Loading Data Scientist profile...",
              "Loading Cloud Architect modules...",
              "Subject: Bridging complex financial data with scalable infrastructure.",
              "Status: ONLINE."
            ]}
            typeSpeed={40}
            backSpeed={20}
            loop={false}
            cursorChar="|"
            showCursor={true}
          />
        </div>
      </header>

      <main className="space-y-16">

        {/* --- ABOUT SECTION --- */}
        <section id="about">
          <Prompt path="~/about" command="cat summary.txt" />
          <div className="pl-4 text-term-gray">
            <p className="mb-4">
              <span className="text-term-cyan">Currently:</span> Pursuing MSc Data Science at University of Bristol (2025-2026).
            </p>
            <p>
              My journey is defined by rapid tech evolution. Starting with a dual tech-management degree, I entered FinTech ready to solve problems. In 3 years at HDFC AMC, I transitioned from analyzing datasets to architecting the cloud backends that power them. I build scalable systems, design resilient cloud infrastructure, and turn raw data into intelligence.
            </p>
          </div>
        </section>


        {/* --- EXPERIENCE SECTION (The Core) --- */}
        <section id="experience">
          <Prompt path="~/work_history" command="tail -n 3 career.log" />
          
          <div className="pl-2 space-y-8 relative border-l border-term-gray/30 ml-2">
            {/* Job 3: Cloud Architect */}
            <div className="pl-6 relative">
               <div className="absolute w-3 h-3 bg-term-cyan rounded-full -left-[7px] top-1.5"></div>
              <h3 className="text-xl text-term-cyan">HDFC Asset Management Co.</h3>
              <div className="text-term-gray text-sm mb-2">[July 2022 – July 2025] :: Mumbai, In</div>
              
              <div className="mb-4">
                <h4 className="text-term-green font-bold"> Role: Cloud Architect & DevOps Engineer (Year 3)</h4>
                <ul className="list-disc list-inside text-term-gray pl-4 mt-2 space-y-1">
                  <li>Led architectural shift from monolith to microservices on Azure.</li>
                  <li>Implemented CI/CD pipelines (GitLab CI) reducing deployment time by 40%.</li>
                  <li>Managed full backend lifecycle using FastAPI, Docker, and Kubernetes.</li>
                </ul>
              </div>
               {/* Job 2: Data Engineer */}
              <div className="mb-4">
                 <h4 className="text-term-green font-bold"> Role: Data Engineer & Python Backend (Year 2)</h4>
                 <ul className="list-disc list-inside text-term-gray pl-4 mt-2 space-y-1">
                  <li>Built internal <span className="text-term-cyan">RAG system</span> using LangChain & Vector DBs to query compliance docs, cutting search time by 60%.</li>
                  <li>Engineered robust Apache Airflow ETL pipelines for terabytes of transaction data.</li>
                </ul>
              </div>
               {/* Job 1: Analyst */}
              <div>
                 <h4 className="text-term-green font-bold"> Role: Data Analyst (Year 1)</h4>
                 <ul className="list-disc list-inside text-term-gray pl-4 mt-2 space-y-1">
                  <li>Extracted insights on customer behavior for SIP retention strategies.</li>
                  <li>Automated daily NAV reporting dashboards using SQL and Python Pandas.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills">
          <Prompt path="~/skills" command="./run_diagnostics.sh --full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
            
            <div className="border border-term-gray/50 p-4 bg-term-bg/50">
              <h3 className="text-term-cyan mb-2 border-b border-term-gray/30 pb-1">[Cloud & DevOps]</h3>
              <p className="text-sm text-term-gray">
                Azure, AWS, Docker, Kubernetes, Terraform (IaC), CI/CD pipelines, Linux Admin.
              </p>
            </div>

            <div className="border border-term-gray/50 p-4 bg-term-bg/50">
              <h3 className="text-term-cyan mb-2 border-b border-term-gray/30 pb-1">[Data Engineering]</h3>
              <p className="text-sm text-term-gray">
                ETL Pipelines, Apache Airflow, SQL/NoSQL, Vector Databases (Pinecone/Milvus for RAG), Data Warehousing.
              </p>
            </div>

            <div className="border border-term-gray/50 p-4 bg-term-bg/50">
              <h3 className="text-term-cyan mb-2 border-b border-term-gray/30 pb-1">[Backend Dev]</h3>
              <p className="text-sm text-term-gray">
                Python (Django/FastAPI), RESTful APIs, Microservices Arch, Redis Caching.
              </p>
            </div>

             <div className="border border-term-gray/50 p-4 bg-term-bg/50">
              <h3 className="text-term-cyan mb-2 border-b border-term-gray/30 pb-1">[Data Science]</h3>
              <p className="text-sm text-term-gray">
                Pandas, Scikit-Learn, NLP (LangChain/LLMs), PowerBI visualization.
              </p>
            </div>

          </div>
        </section>

        {/* --- EDUCATION SECTION --- */}
        <section id="education">
          <Prompt path="~/education" command="cat credentials.json" />
          <div className="pl-4 space-y-6">
            <div>
               <div className="flex justify-between text-term-cyan">
                <h3>MSc. Data Science</h3>
                <span>[Sep 2025 - Aug 2026]</span>
               </div>
              <div className="text-term-gray">University of Bristol, UK</div>
              <div className="text-sm text-term-gray mt-1">Focus: Large-Scale Data Engineering, AI & Text Analytics.</div>
            </div>
            
            <div>
               <div className="flex justify-between text-term-cyan">
                <h3>B.Tech (IT) + MBA (Tech Management)</h3>
                <span>[2017 - 2022]</span>
               </div>
              <div className="text-term-gray">NMIMS, Mumbai</div>
               <div className="text-sm text-term-gray mt-1">5-year Integrated Dual Degree.</div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER / CONTACT --- */}
      <footer className="mt-20 border-t border-term-gray/30 pt-6 pb-10 text-center md:text-left">
        <Prompt command="exit" />
        <div className="pl-4 mt-4 flex flex-col md:flex-row items-center gap-6">
          <span className="text-term-gray"># Session terminated. Connect via:</span>
          <div className="flex gap-6 text-xl">
            {/* Replace # with your actual links */}
            <a href="#" className="hover:text-term-cyan transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-term-cyan transition-colors"><FaGithub /></a>
            <a href="mailto:your.email@example.com" className="hover:text-term-cyan transition-colors"><FaEnvelope /></a>
          </div>
        </div>
         <div className="text-term-gray/50 text-xs text-center mt-8">
            © {new Date().getFullYear()} // Built with React + Tailwind + Caffeine
         </div>
      </footer>

    </div>
  );
}

export default App;