import React from 'react';
import { ReactTyped } from "react-typed";
import Prompt from './components/Prompt';
import { FaGithub, FaLinkedin, FaEnvelope, FaMobile, FaPhone } from 'react-icons/fa';

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
              I had always been a curios person ever since my school days, ever eager to try out and learn things. I explored a variety of domains like web development, game development, augmented reality in my college before picking Data, the field I truly felt passionate about. Whether it be Data Science, Data Engineering, Data Analysis, Machine Learning or Artificial Intelligence I have dellved deep into them and loved every single moment. Once I did not just stop there, I aim to become a full-stack developer who along with Data and AIML can handle front-end, back-end, cloud, infra.
            </p>
          </div>
        </section>


        {/* --- EXPERIENCE SECTION (The Core) --- */}
        <section id="experience">
          <Prompt path="~/work_history" command="cat career.log" />
          
          <div className="pl-2 space-y-8 relative border-l border-term-gray/30 ml-2">
            {/* Job 3: Cloud Architect */}
            <div className="pl-6 relative">
               <div className="absolute w-3 h-3 bg-term-cyan rounded-full -left-[7px] top-1.5"></div>
              <h3 className="text-xl text-term-cyan">HDFC Asset Management Company Limited</h3>
              <div className="text-term-gray text-sm mb-2">[July 2022 – July 2025] :: Mumbai, India</div>
              
              <div className="mb-4">
                <h4 className="text-term-green font-bold"> Role: AI Solutions Engineer</h4>
                <ul className="list-disc list-inside text-term-gray pl-4 mt-2 space-y-1">
                  <li>Analyzed customer data and drew insights using Python.</li>
                  <li>Developed Power BI dashboards for fortnightly credit report analysis thus, migrating financial analysts from excel to Power BI and improving analyst efficiency by <span className="text-term-cyan">10 hours a week.</span></li>
                  <li>Identified customer buying patterns using Market Basket Analysis by implementing the Apriori Algorithm</li>
                  <li>Designed Normalized SQL Schema for internal analytics platform.</li>
                  <li>Developed Optimized SQL queries for data preprocessing.</li>
                  <li>Automated Data preprocessing pipelines using AWS SageMaker.</li>
                  <li>Developed SQL Functions and Procedures for efficient data insertion.</li>
                  <li>Designed and Maintained Vector Database for company documents.</li>
                  <li>Developed GenAI applications for internal company use to answer department specific queries.</li>
                  <li>Developed an automation job to read over 300 mails daily and transform the incoming unstructured data to structured format and save <span className="text-term-cyan">60 manual analyst hours a month.</span></li>
                  <li>Designed the Infra Architecture for internal analytics platform and Gen AI Applications on AWS.</li>
                  <li>Managed multiple Conda Python environments using Docker.</li>
                  <li>Administered Security roles and policies using AWS Security Groups.</li>
                  <li>Deployed Nginx reverse proxy to minimize external security threat to below <span className="text-term-cyan">1%.</span></li>
                  <li>Automated deployment of multiple environments using Jenkins and GitLab by creating a CI/CD pipeline.</li>
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
              <div className="text-term-gray">University of Bristol, Bristol, UK</div>
            </div>
            
            <div>
               <div className="flex justify-between text-term-cyan">
                <h3>B.Tech (IT) + MBA (Tech Management)</h3>
                <span>[June 2017 - April 2022]</span>
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
            <a href="http://www.linkedin.com/in/kaustubhson4" className="hover:text-term-cyan transition-colors"><FaLinkedin /></a>
            <a href="http://www.github.com/Arishtanemi4" className="hover:text-term-cyan transition-colors"><FaGithub /></a>
          </div>
        </div>
        <div className="pl-4 mt-4 flex flex-col md:flex-row items-center gap-6">
          <span className="text-term-gray"># Email: ksstubh.sonawane@gmail.com </span>
        </div>
        <div className="pl-4 mt-2 flex flex-col md:flex-row items-center gap-6">
          <span className="text-term-gray"># Mobile: +44 7388229743</span>
        </div>
         {/* <div className="text-term-gray/50 text-xs text-center mt-8">
            © {new Date().getFullYear()} // Built with React + Tailwind + Caffeine
         </div> */}
      </footer>

    </div>
  );
}

export default App;