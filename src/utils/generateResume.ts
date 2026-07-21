import jsPDF from "jspdf";
import {
  developerProfile,
  skillsData,
  experienceData,
  projectsData,
} from "../data";

export const generateResume = () => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;

  let y = 18;

  // =========================
  // Helper Functions
  // =========================

  const addNewPageIfNeeded = (height = 10) => {
    if (y + height > pageHeight - 15) {
      doc.addPage();
      y = 18;
    }
  };

  const addSectionTitle = (title: string) => {
    addNewPageIfNeeded(15);

    y += 4;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(79, 70, 229);

    doc.text(title.toUpperCase(), margin, y);

    y += 2;

    doc.setDrawColor(79, 70, 229);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);

    y += 7;
  };

  const addWrappedText = (
    text: string,
    fontSize = 9.5,
    lineHeight = 5
  ) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    doc.setTextColor(60, 60, 60);

    const lines = doc.splitTextToSize(text, contentWidth);

    addNewPageIfNeeded(lines.length * lineHeight);

    doc.text(lines, margin, y);

    y += lines.length * lineHeight;
  };

  // =========================
  // Header
  // =========================

  doc.setFillColor(24, 29, 66);
  doc.rect(0, 0, pageWidth, 48, "F");

  doc.setTextColor(255, 255, 255);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);

  doc.text(developerProfile.name, margin, 20);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  doc.text(developerProfile.title, margin, 28);

  doc.setFontSize(8.5);

  doc.text(
    `${developerProfile.email}  |  ${developerProfile.phone}`,
    margin,
    36
  );

  doc.text(
    developerProfile.location,
    margin,
    42
  );

  y = 58;

  // =========================
  // Professional Summary
  // =========================

  addSectionTitle("Professional Summary");

  addWrappedText(developerProfile.bio, 9.5, 5);

  // =========================
  // Career Highlights
  // =========================

  addSectionTitle("Career Highlights");

  const highlights = [
    `${developerProfile.yearsOfExperience}+ years of professional experience`,
    `${developerProfile.projectsCompleted}+ projects completed`,
    `${developerProfile.happyClients}+ happy clients`,
    `${developerProfile.technologiesCount}+ technologies and tools`,
  ];

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(60, 60, 60);

  highlights.forEach((highlight) => {
    addNewPageIfNeeded(7);

    doc.text("•", margin, y);
    doc.text(highlight, margin + 5, y);

    y += 6;
  });

  // =========================
  // Technical Skills
  // =========================

  addSectionTitle("Technical Skills");

  const skillCategories = {
    ai: "AI & AI Tools",
    frontend: "Frontend Development",
    tools: "Development Tools",
  };

  Object.entries(skillCategories).forEach(([category, title]) => {
    addNewPageIfNeeded(15);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(30, 30, 30);

    doc.text(title, margin, y);

    y += 5;

    const skills = skillsData
      .filter((skill) => skill.category === category)
      .map((skill) => skill.name)
      .join("  •  ");

    addWrappedText(skills, 9, 5);

    y += 2;
  });

  // =========================
  // Experience
  // =========================

  addSectionTitle("Professional Experience");

  const experiences = experienceData.filter(
    (item) => item.type === "experience"
  );

  experiences.forEach((experience) => {
    addNewPageIfNeeded(25);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(30, 30, 30);

    doc.text(experience.role, margin, y);

    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(79, 70, 229);

    doc.text(
      `${experience.company}  |  ${experience.duration}`,
      margin,
      y
    );

    y += 6;

    experience.description.forEach((description) => {
      addNewPageIfNeeded(10);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(60, 60, 60);

      const lines = doc.splitTextToSize(
        `• ${description}`,
        contentWidth
      );

      doc.text(lines, margin, y);

      y += lines.length * 4.5 + 2;
    });

    y += 3;
  });

  // =========================
  // Education & Certification
  // =========================

  addSectionTitle("Education & Certifications");

  const education = experienceData.filter(
    (item) => item.type === "education"
  );

  education.forEach((item) => {
    addNewPageIfNeeded(20);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(30, 30, 30);

    doc.text(item.role, margin, y);

    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(79, 70, 229);

    doc.text(
      `${item.company}  |  ${item.duration}`,
      margin,
      y
    );

    y += 6;

    item.description.forEach((description) => {
      const lines = doc.splitTextToSize(
        `• ${description}`,
        contentWidth
      );

      addNewPageIfNeeded(lines.length * 4.5);

      doc.setTextColor(60, 60, 60);
      doc.text(lines, margin, y);

      y += lines.length * 4.5 + 2;
    });

    y += 3;
  });

  // =========================
  // Selected Projects
  // =========================

  addSectionTitle("Selected Projects");

  projectsData.forEach((project) => {
    addNewPageIfNeeded(25);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(30, 30, 30);

    doc.text(project.title, margin, y);

    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(79, 70, 229);

    doc.text(
      project.tags.join("  •  "),
      margin,
      y
    );

    y += 5;

    addWrappedText(project.description, 9, 4.5);

    y += 3;
  });

  // =========================
  // Footer on Every Page
  // =========================

  const totalPages = doc.getNumberOfPages();

  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(130, 130, 130);

    doc.text(
      `${developerProfile.name} • ${developerProfile.email}`,
      margin,
      pageHeight - 8
    );

    doc.text(
      `Page ${i} of ${totalPages}`,
      pageWidth - margin - 25,
      pageHeight - 8
    );
  }

  // =========================
  // Download PDF
  // =========================

  doc.save(
    `${developerProfile.name.replace(/\s+/g, "-")}-Resume.pdf`
  );
};