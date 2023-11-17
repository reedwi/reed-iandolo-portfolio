"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Geology</span> (Math minor), I had a plan to go into Oil and Gas. <span className="italic">The economy unfortunately did not agree with this plan. </span>
        I started out my career in the construction industry doing <span className="font-medium">on-site material testing</span>. After a bit of time doing this, I transitioned to 
        <span className="font-medium"> project management and estimation</span> within the construction industry. While in this role, I began teaching myself Python, looking into AWS and learning about Salesforce
        as I was exploring a career path in the tech industry. I realized I really liked what I was learning and decided to pursue this full time.
      </p>
      <p>
        After going through various Python courses and picking up some AWS and Salesforce Certifications, I was able to land my first role as a technologist for 
        OBO, which is a technical consulting company focused in the Sales and Marketing space (<span className="font-medium">HubSpot, Salesforce</span>). I started out in this role doing basic Salesforce and HubSpot 
        implementations. Over a short period of time, I was able to show my ability to quickly learn new things and was able to get new responsibilities. I began building
        <span className="font-medium"> integrations</span> between SaaS applications like HubSpot and Salesforce and other SaaS apps, Databases, Data Warehouses using <span className="font-medium">Python and Node</span>. As I continued to deliver successful
        projects and consistently happy clients, my responsibilities grew into <span className="font-medium">system design and architecture</span> and leading the company&apos;s largest projects. 
        Ultimately, through a few promotions, this lead me to my current role as <span className="font-medium">Director of Technology</span> for the company. I am strategizing on our largest and most complex projects, helping mentor junior team members,
         develop new lines of business and discover new tools and methodlogies to improve our delivery.
      </p>

      <p>
        I am a constant learner and am always working and tinkering on different projects.
        Right now I am really interested in <span className="font-medium">AI and LLMs</span>s and have been experimenting building small apps. I have also 
        been enjoying learning some front-end and picking up <span className="font-medium">Next</span> (hence this website).
      </p>
    </motion.section>
  );
}