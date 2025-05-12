import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          Calvince Omondi Akumu
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          IT Professional | Frontend Developer | Network & IT Support
        </p>
        <div className="space-y-2 mb-6">
          <p><strong>Email:</strong> <a className="text-blue-600" href="mailto:calvinceo054@gmail.com">calvinceo054@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a className="text-blue-600" href="https://www.linkedin.com/in/calvince-akumu-95b544235" target="_blank" rel="noopener noreferrer">linkedin.com/in/calvince-akumu-95b544235</a></p>
          <p><strong>Phone/WhatsApp:</strong> +254 741 785 258</p>
          <p><strong>Facebook:</strong> <a className="text-blue-600" href="https://facebook.com/kalvins.omondi.5" target="_blank" rel="noopener noreferrer">facebook.com/kalvins.omondi.5</a></p>
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">About Me</h2>
          <p>I am Calvince Omondi Akumu, an adaptable IT professional with expertise in frontend web development, network setup, and hardware/software installation. I have a passion for providing reliable IT support, problem-solving, and creating digital solutions that bring value to individuals and businesses.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Skills & Expertise</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Frontend Development: HTML, CSS, JavaScript</li>
            <li>Network Configuration: Router/switch setup, LAN/WAN support</li>
            <li>Software & Hardware Installation: Windows, macOS, Linux setup</li>
            <li>Database Design: MySQL, database management</li>
            <li>Data Entry & Office Tools: MS Word, Excel, PowerPoint</li>
            <li>IT Support: Troubleshooting, system optimization</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Services I Offer</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Website updates & frontend development</li>
            <li>IT support & troubleshooting</li>
            <li>Network setup & configuration</li>
            <li>Database management & creation</li>
            <li>Computer maintenance (hardware & software)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Education & Certifications</h2>
          <p>BSc in Computer Information Systems – Graduated: 2024</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Client Testimonials</h2>
          <p>Coming soon! Stay tuned for client feedback.</p>
        </section>

        <footer className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Calvince Omondi Akumu. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
