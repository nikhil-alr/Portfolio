import { useState } from 'react';
import { PencilIcon, CheckIcon } from '@heroicons/react/24/outline';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Header() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Nikhil Kamboj');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleDownloadPdf = async () => {
    // Select only the main content area, excluding header and footer
    const element = document.querySelector('.main-content') as HTMLElement;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2, // Higher quality
        useCORS: true, 
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${name.replace(' ', '_')}_CV.pdf`);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    }
  };

  return (
    <header className="header">
      <div className="header-logo">
        <span className="material-symbols-outlined text-3xl">terminal</span>
        {isEditing ? (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-xl font-bold bg-transparent border border-gray-300 rounded px-2 py-1"
              autoFocus
            />
            <button onClick={handleSave} className="p-1 hover:bg-gray-100 rounded">
              <CheckIcon className="w-5 h-5 text-green-600" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <h1 className="header-logo-text">{name}</h1>
            <button onClick={handleEdit} className="p-1 hover:bg-gray-100 rounded">
              <PencilIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>
      <div className="header-actions">
        <nav className="nav-links">
          {/* <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a> */}
        </nav>
        <button className="btn-primary" onClick={handleDownloadPdf}>
          <span className="material-symbols-outlined icon">download</span>
          <span>Download PDF</span>
        </button>
      </div>
    </header>
  );
}
