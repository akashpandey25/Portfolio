import subprocess
import os

HTML_CONTENT = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Akash Pandey - Resume</title>
<style>
  @page {
    size: letter;
    margin: 12mm 16mm 10mm 16mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1e293b;
    font-size: 9.35pt;
    line-height: 1.34;
    background: #ffffff;
    -webkit-print-color-adjust: exact;
  }
  .header {
    text-align: center;
    margin-bottom: 10px;
  }
  .name {
    font-size: 23pt;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.3px;
    margin-bottom: 3px;
  }
  .contact {
    font-size: 8.9pt;
    color: #475569;
  }
  .contact a, .link {
    color: #0284c7;
    text-decoration: underline;
  }
  .section-title {
    font-size: 10.2pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #0f172a;
    border-bottom: 1.2px solid #0f172a;
    padding-bottom: 1.5px;
    margin-top: 9px;
    margin-bottom: 4.5px;
  }
  .summary-text {
    font-size: 9.1pt;
    color: #334155;
    line-height: 1.36;
    text-align: justify;
  }
  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 1.5px;
    font-size: 9.05pt;
    color: #334155;
  }
  .skills-row strong {
    color: #0f172a;
    font-weight: 600;
  }
  .entry-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 3.5px;
  }
  .entry-title {
    font-size: 9.5pt;
    font-weight: 700;
    color: #0f172a;
  }
  .entry-date {
    font-size: 8.9pt;
    color: #475569;
    font-weight: 500;
  }
  .entry-sub {
    font-size: 9.1pt;
    font-weight: 600;
    color: #1e40af;
    margin-bottom: 2.5px;
  }
  ul.bullets {
    margin-left: 16px;
  }
  ul.bullets li {
    font-size: 9.05pt;
    color: #334155;
    line-height: 1.34;
    margin-bottom: 2px;
    text-align: justify;
  }
  ul.bullets li strong {
    color: #0f172a;
  }
</style>
</head>
<body>

  <div class="header">
    <div class="name">Akash Pandey</div>
    <div class="contact">
      Kolkata, India &nbsp;|&nbsp;
      <a href="mailto:akashpandey00480@gmail.com">akashpandey00480@gmail.com</a> &nbsp;|&nbsp;
      <a href="tel:+918825279154">+91 8825279154</a> &nbsp;|&nbsp;
      <a href="https://www.linkedin.com/in/akashpandey18/" target="_blank">LinkedIn</a> &nbsp;|&nbsp;
      <a href="https://github.com/akashpandey25" target="_blank">GitHub</a>
    </div>
  </div>

  <div class="section-title">Summary</div>
  <p class="summary-text">
    A frontend-centric software engineer with almost 2 years of experience working on React and JavaScript technologies. Experienced in developing reusable component libraries, interactive data visualizations, and integrating REST and GraphQL APIs. Proficient in working within Agile frameworks to build responsive and user-centric features.
  </p>

  <div class="section-title">Technical Skills</div>
  <div class="skills-container">
    <div class="skills-row"><strong>Languages:</strong> Core Java, JavaScript (ES6+), SQL</div>
    <div class="skills-row"><strong>Frontend:</strong> React, HTML5, CSS3, Material UI, React Hooks, Redux</div>
    <div class="skills-row"><strong>Backend &amp; APIs:</strong> Node.js, FastAPI, REST APIs, GraphQL</div>
    <div class="skills-row"><strong>Frontend Engineering:</strong> Component Design, Reusable Components, Frontend Architecture, API Integration, Responsive Design</div>
    <div class="skills-row"><strong>DB:</strong> PostgreSQL, MySQL, Supabase</div>
    <div class="skills-row"><strong>Concepts:</strong> OOP, DBMS, Data Structures &amp; Algorithms</div>
    <div class="skills-row"><strong>Tools &amp; Practices:</strong> Git, GitHub, VS Code, IntelliJ, Debugging</div>
    <div class="skills-row"><strong>AI-Assisted Development:</strong> Claude, AI-assisted debugging and development</div>
  </div>

  <div class="section-title">Experience</div>
  <div class="entry-header">
    <div class="entry-title">Software Engineer (Frontend), Remote</div>
    <div class="entry-date">September 2024 – Present</div>
  </div>
  <div class="entry-sub">Genetic Web Technologies Pvt. Ltd.</div>
  <ul class="bullets">
    <li>Developed and maintained a React-based Cyber Threat Intelligence (CTI) platform built upon OpenCTI, providing analysts with search, investigation, visualization, and enrichment capabilities for STIX 2.1 threat intelligence data.</li>
    <li>Created an interactive STIX graph explorer using React and D3.js, supporting multi-hop relationship exploration, node expansion, and interactive force-directed graphs.</li>
    <li>Implemented IP, domain, URL, and hash search workflows, with STIX object resolution, data transformation, aggregation, and custom graph traversal handled by FastAPI.</li>
    <li>Implemented multi-hop BFS traversal, deduplication, and graph-size limiting in the backend to efficiently traverse and return related STIX entities.</li>
    <li>Built reusable React + Material UI components, dashboards, filters, charts, and server-side pagination/filtering for large IOC and report datasets using React Query.</li>
    <li>Integrated threat-intelligence enrichment and feeds including VirusTotal, Shodan, ZoomEye, MITRE ATT&amp;CK, AlienVault, and URLhaus.</li>
    <li>Collaborated in Agile sprints with rapid iteration cycles, utilizing Git’s feature-branch workflow in a cross-functional team setting.</li>
  </ul>

  <div class="section-title">Projects</div>
  <div class="entry-header">
    <div class="entry-title">Gym Buddy — Workout Planning &amp; Tracking App</div>
    <div class="entry-date"><a href="https://github.com/akashpandey25/gymbuddy" class="link" target="_blank">GitHub</a></div>
  </div>
  <ul class="bullets">
    <li>Built the full-stack fitness web application using React (Vite) and Node.js REST API with PostgreSQL database (Supabase).</li>
    <li>Developed a custom workout engine covering over 65 exercises and including dynamic time-based planning at 4 levels.</li>
    <li>Created the muscle group conflict scoring system which allows to dynamically replace exercises that utilize the same equipment.</li>
    <li>Implemented the session logging system with Supabase which stores all necessary information of the generated workout plans in a structured manner.</li>
  </ul>

  <div class="section-title">Education</div>
  <div class="entry-header">
    <div class="entry-title">B. Tech in Computer Science &amp; Engineering</div>
    <div class="entry-date">2020 – 2024</div>
  </div>
  <div class="entry-sub">Siliguri Institute of Technology, West Bengal &nbsp;|&nbsp; CGPA: 8.73 / 10</div>

  <div class="section-title">Achievements</div>
  <ul class="bullets">
    <li>Solved over 300 Data Structures &amp; Algorithms problems across <a href="https://leetcode.com/u/akashpandey00480/" class="link" target="_blank">LeetCode</a> and <a href="https://www.geeksforgeeks.org/profile/akashpandey00480?tab=activity" class="link" target="_blank">GFG</a>.</li>
  </ul>

</body>
</html>
"""

def generate():
    html_path = os.path.abspath('public/resume.html')
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(HTML_CONTENT)

    edge_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
    html_url = 'file:///' + html_path.replace('\\', '/')
    output_pdf = os.path.abspath('public/Akash_Pandey_Resume.pdf')

    cmd = [
        edge_path,
        '--headless=new',
        '--disable-gpu',
        '--no-pdf-header-footer',
        f'--print-to-pdf={output_pdf}',
        html_url
    ]
    subprocess.run(cmd, check=True)
    print("SUCCESS: Generated PDF at", output_pdf)
    print("PDF File Size:", os.path.getsize(output_pdf))

if __name__ == '__main__':
    generate()
