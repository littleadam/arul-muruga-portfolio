// Generates the two additional CV formats:
//   - German tabular Lebenslauf (Arul_Muruga_Lebenslauf_DE.pdf / .docx)
//   - Europass CV (Arul_Muruga_Europass_CV.pdf / .docx)
// Source content comes from scripts/cv-content.mjs so all formats stay in sync.

import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  Packer,
  PageNumber,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
} from "docx";
import { cv, cvDe } from "./cv-content.mjs";

const OUT_DIR = path.resolve("public");

/* ---------------------------------------------------------------- */
/* shared content                                                    */
/* ---------------------------------------------------------------- */

const website = "littleadam.github.io/arul-muruga-portfolio";

const isMotherTongue = (language) =>
  /mother tongue|muttersprache|langue maternelle|^native$/i.test(
    `${language.level} ${language.note}`
  );

const otherLanguages = (cvData) =>
  cvData.languages.filter((language) => !isMotherTongue(language));

const motherTongue = (cvData) =>
  cvData.languages.find((language) => isMotherTongue(language));

const personalRows = (cvData, labels) => {
  const rows = [
    [labels.name, "Arul Muruga"],
    [labels.address, cvData.contact[0][0]],
    [labels.phone, cvData.contact[0][2]],
    [labels.email, cvData.contact[0][1]],
    [labels.linkedin, "linkedin.com/in/aruldswamy"],
    [labels.github, "github.com/littleadam"],
    [labels.website, website],
  ];
  if (labels.mobility) {
    rows.push([labels.mobility, labels.mobilityValue]);
  }
  return rows;
};

/* ---------------------------------------------------------------- */
/* PDF helpers                                                       */
/* ---------------------------------------------------------------- */

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN = 48;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const BOTTOM = PAGE_HEIGHT - MARGIN;
const LABEL_WIDTH = 112;
const GUTTER = 14;

const PDF_COLORS = {
  ink: "#1F2933",
  muted: "#5B6672",
  accent: "#17324D",
  europass: "#003399",
  rule: "#B9B2A5",
  footer: "#7A838C",
  tint: "#F2F4F7",
};

const pdfFont = (block) => {
  if (block.bold) return "Helvetica-Bold";
  if (block.italics) return "Helvetica-Oblique";
  return "Helvetica";
};

function blockHeight(doc, block, width) {
  doc.font(pdfFont(block)).fontSize(block.size ?? 9);
  const textWidth = block.bullet ? width - 12 : width;
  return (
    doc.heightOfString(block.text, {
      width: textWidth,
      lineGap: block.lineGap ?? 1.2,
    }) + (block.after ?? 0)
  );
}

function drawBlock(doc, block, x, y, width) {
  const font = pdfFont(block);
  const size = block.size ?? 9;
  const color = block.color ?? PDF_COLORS.ink;
  if (block.bullet) {
    doc
      .font("Helvetica")
      .fontSize(size)
      .fillColor(color)
      .text("•", x, y, { width: 10, lineGap: block.lineGap ?? 1.2 });
    doc
      .font(font)
      .fontSize(size)
      .fillColor(color)
      .text(block.text, x + 12, y, {
        width: width - 12,
        lineGap: block.lineGap ?? 1.2,
      });
    return doc.y + (block.after ?? 0);
  }
  doc
    .font(font)
    .fontSize(size)
    .fillColor(color)
    .text(block.text, x, y, {
      width,
      lineGap: block.lineGap ?? 1.2,
      align: block.align,
    });
  return doc.y + (block.after ?? 0);
}

function createPdf({ title, subject, keywords }) {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN },
    bufferPages: true,
    info: { Title: title, Author: "Arul Muruga", Subject: subject, Keywords: keywords },
  });
  doc.ensure = (height) => {
    if (doc.y + height > BOTTOM) doc.addPage();
  };
  return doc;
}

function pdfSection(doc, title, accent = PDF_COLORS.accent) {
  doc.ensure(64);
  if (doc.y > MARGIN + 4) doc.moveDown(0.7);
  const y = doc.y;
  doc
    .font("Helvetica-Bold")
    .fontSize(9.4)
    .fillColor(accent)
    .text(title.toUpperCase(), MARGIN, y, {
      width: CONTENT_WIDTH,
      characterSpacing: 0.9,
    });
  const lineY = doc.y + 3;
  doc
    .moveTo(MARGIN, lineY)
    .lineTo(MARGIN + CONTENT_WIDTH, lineY)
    .lineWidth(0.7)
    .strokeColor(PDF_COLORS.rule)
    .stroke();
  doc.y = lineY + 8;
}

// rows: [{ label, blocks: [...] }]
function pdfTable(doc, rows, options = {}) {
  const labelWidth = options.labelWidth ?? LABEL_WIDTH;
  const gutter = options.gutter ?? GUTTER;
  const rightX = MARGIN + labelWidth + gutter;
  const rightWidth = CONTENT_WIDTH - labelWidth - gutter;
  const padding = options.padding ?? 5;

  rows.forEach((row) => {
    const height =
      Math.max(
        row.blocks.reduce((sum, block) => sum + blockHeight(doc, block, rightWidth), 0),
        doc.font("Helvetica").fontSize(8.4).heightOfString(row.label, { width: labelWidth })
      ) +
      padding * 2;

    if (doc.y + height > BOTTOM) {
      doc.addPage();
      doc.y = MARGIN;
    }

    const top = doc.y;
    doc
      .font("Helvetica-Bold")
      .fontSize(options.labelSize ?? 8.4)
      .fillColor(options.labelColor ?? PDF_COLORS.muted)
      .text(row.label, MARGIN, top + padding, { width: labelWidth, lineGap: 1 });

    let y = top + padding;
    row.blocks.forEach((block) => {
      y = drawBlock(doc, block, rightX, y, rightWidth);
    });
    doc.y = Math.max(y, top + height - padding) + padding;

    if (options.divider) {
      doc
        .moveTo(MARGIN, doc.y - padding / 2)
        .lineTo(MARGIN + CONTENT_WIDTH, doc.y - padding / 2)
        .lineWidth(0.4)
        .strokeColor("#E2DED5")
        .stroke();
    }
  });
}

function pdfHeader(doc, { kicker, name, role, contact, accent }) {
  if (kicker) {
    doc
      .font("Helvetica-Bold")
      .fontSize(8.2)
      .fillColor(accent)
      .text(kicker, MARGIN, MARGIN, {
        width: CONTENT_WIDTH * 0.5,
        characterSpacing: 2.2,
      });
  }
  doc
    .font("Helvetica-Bold")
    .fontSize(23)
    .fillColor(PDF_COLORS.ink)
    .text(name, MARGIN, kicker ? doc.y + 4 : MARGIN, {
      width: CONTENT_WIDTH,
      characterSpacing: 0.3,
    });
  doc.moveDown(0.1);
  doc
    .font("Helvetica")
    .fontSize(9.4)
    .fillColor(PDF_COLORS.muted)
    .text(role, { width: CONTENT_WIDTH, lineGap: 1 });
  doc.moveDown(0.3);
  contact.forEach((line) => {
    doc
      .font("Helvetica")
      .fontSize(8.4)
      .fillColor(PDF_COLORS.muted)
      .text(line.join("   |   "), { width: CONTENT_WIDTH, lineGap: 0.6 });
  });
  const y = doc.y + 6;
  doc
    .moveTo(MARGIN, y)
    .lineTo(MARGIN + CONTENT_WIDTH, y)
    .lineWidth(1.2)
    .strokeColor(accent)
    .stroke();
  doc.y = y + 4;
}

function pdfFooter(doc, footerText) {
  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i += 1) {
    doc.switchToPage(range.start + i);
    const previousBottom = doc.page.margins.bottom;
    doc.page.margins.bottom = 0;
    doc
      .font("Helvetica")
      .fontSize(7.4)
      .fillColor(PDF_COLORS.footer)
      .text(`${footerText}  |  Seite ${i + 1} von ${range.count}`, MARGIN, PAGE_HEIGHT - 26, {
        width: CONTENT_WIDTH,
        align: "right",
        lineBreak: false,
      });
    doc.page.margins.bottom = previousBottom;
  }
}

function jobBlocks(job, options = {}) {
  const blocks = [
    { text: job.title, bold: true, size: options.titleSize ?? 9.8, after: 1 },
    {
      text: `${job.org} · ${job.location}`,
      size: 8.6,
      color: PDF_COLORS.muted,
      after: job.intro ? 2 : 4,
    },
  ];
  if (job.intro) {
    blocks.push({
      text: job.intro,
      italics: true,
      size: 8.2,
      color: PDF_COLORS.muted,
      after: 4,
    });
  }
  job.bullets.forEach((bullet, index) => {
    blocks.push({
      text: bullet,
      bullet: true,
      size: 8.4,
      after: index === job.bullets.length - 1 ? 0 : 2.4,
    });
  });
  return blocks;
}

/* ---------------------------------------------------------------- */
/* German tabular Lebenslauf                                         */
/* ---------------------------------------------------------------- */

const lebenslauf = {
  ...cvDe,
  fileBase: "Arul_Muruga_Lebenslauf_DE",
  docTitle: "Arul Muruga - Tabellarischer Lebenslauf",
};

const LEBENSLAUF_LABELS = {
  name: "Name",
  address: "Adresse",
  phone: "Telefon",
  email: "E-Mail",
  linkedin: "LinkedIn",
  github: "GitHub",
  website: "Website",
  mobility: "Mobilität",
  mobilityValue: "Umzugsbereit an den Arbeitsort",
};

function writeLebenslaufPdf(cvData, outFile) {
  return new Promise((resolve, reject) => {
    const doc = createPdf({
      title: cvData.docTitle,
      subject: cvData.docDescription,
      keywords: "Lebenslauf, technischer Projektmanager, KI-Transformation, Architektur",
    });
    const output = fs.createWriteStream(outFile);
    doc.pipe(output);

    pdfHeader(doc, {
      kicker: "LEBENSLAUF",
      name: "Arul Muruga",
      role: cvData.role,
      contact: cvData.contact,
      accent: PDF_COLORS.accent,
    });
    doc
      .font("Helvetica")
      .fontSize(8.2)
      .fillColor(PDF_COLORS.muted)
      .text("Tabellarischer Lebenslauf", MARGIN, doc.y + 2, { width: CONTENT_WIDTH });
    doc.y += 4;

    pdfSection(doc, "Persönliche Daten");
    pdfTable(
      doc,
      personalRows(cvData, LEBENSLAUF_LABELS).map(([label, value]) => ({
        label,
        blocks: [{ text: value, size: 9 }],
      })),
      { divider: true }
    );

    pdfSection(doc, "Beruflicher Werdegang");
    pdfTable(
      doc,
      cvData.experience.map((job) => ({ label: job.dates, blocks: jobBlocks(job) })),
      { divider: true }
    );

    pdfSection(doc, "Ausbildung");
    pdfTable(doc, [
      {
        label: cvData.education.dates,
        blocks: [
          { text: cvData.education.degree, bold: true, size: 9.4, after: 1 },
          { text: cvData.education.institution, size: 8.6, color: PDF_COLORS.muted },
        ],
      },
    ]);

    pdfSection(doc, "Sprachkenntnisse");
    pdfTable(
      doc,
      cvData.languages.map((language) => ({
        label: language.name,
        blocks: [
          {
            text:
              isMotherTongue(language) ? "Muttersprache" : `${language.level} - ${language.note}`,
            size: 9,
          },
        ],
      })),
      { labelWidth: 96, divider: true }
    );

    pdfSection(doc, "IT-Kenntnisse");
    pdfTable(
      doc,
      cvData.digitalSkills.map((skill) => ({
        label: skill.label,
        blocks: [{ text: skill.value, size: 8.8 }],
      })),
      { labelWidth: 112 }
    );

    pdfSection(doc, "Zertifizierungen");
    pdfTable(
      doc,
      cvData.certifications.map((certification) => ({
        label: "Zertifikat",
        blocks: [{ text: certification, size: 8.8, bullet: true }],
      })),
      { labelWidth: 74, divider: true }
    );

    pdfSection(doc, "Zusätzliche Informationen");
    pdfTable(
      doc,
      cvData.additional.map((item) => ({
        label: "Hinweis",
        blocks: [{ text: item, size: 8.8, bullet: true }],
      })),
      { labelWidth: 74 }
    );

    pdfFooter(doc, "Arul Muruga - Lebenslauf");
    doc.end();
    output.on("finish", () => resolve(fs.statSync(outFile).size));
    output.on("error", reject);
  });
}

/* ---------------------------------------------------------------- */
/* Europass                                                          */
/* ---------------------------------------------------------------- */

const europass = {
  ...cv,
  fileBase: "Arul_Muruga_Europass_CV",
  docTitle: "Arul Muruga - Europass CV",
};

const EUROPASS_LABELS = {
  name: "Name",
  address: "Address",
  phone: "Telephone",
  email: "Email",
  linkedin: "LinkedIn",
  github: "GitHub",
  website: "Website",
  mobility: "Mobility",
  mobilityValue: "Willing to relocate to the job location",
};

function writeEuropassPdf(cvData, outFile) {
  return new Promise((resolve, reject) => {
    const doc = createPdf({
      title: cvData.docTitle,
      subject: "Europass curriculum vitae - Arul Muruga",
      keywords: "Europass, curriculum vitae, technical project manager, AI transformation",
    });
    const output = fs.createWriteStream(outFile);
    doc.pipe(output);

    // Europass masthead
    doc.rect(0, 0, PAGE_WIDTH, 6).fill(PDF_COLORS.europass);
    doc
      .font("Helvetica-Bold")
      .fontSize(15)
      .fillColor(PDF_COLORS.europass)
      .text("Europass", MARGIN, MARGIN, { width: CONTENT_WIDTH * 0.5 });
    doc
      .font("Helvetica")
      .fontSize(8.6)
      .fillColor(PDF_COLORS.muted)
      .text("Curriculum vitae", MARGIN, doc.y - 10, {
        width: CONTENT_WIDTH,
        align: "right",
        characterSpacing: 1.6,
      });
    doc.y = MARGIN + 34;

    doc
      .font("Helvetica-Bold")
      .fontSize(24)
      .fillColor(PDF_COLORS.ink)
      .text("Arul Muruga", MARGIN, doc.y, { width: CONTENT_WIDTH, characterSpacing: 0.3 });
    doc.moveDown(0.12);
    doc
      .font("Helvetica")
      .fontSize(9.4)
      .fillColor(PDF_COLORS.muted)
      .text(cvData.role, { width: CONTENT_WIDTH, lineGap: 1 });
    const ruleY = doc.y + 8;
    doc
      .moveTo(MARGIN, ruleY)
      .lineTo(MARGIN + CONTENT_WIDTH, ruleY)
      .lineWidth(1.2)
      .strokeColor(PDF_COLORS.europass)
      .stroke();
    doc.y = ruleY + 4;

    pdfSection(doc, "Personal information", PDF_COLORS.europass);
    pdfTable(
      doc,
      personalRows(cvData, EUROPASS_LABELS).map(([label, value]) => ({
        label,
        blocks: [{ text: value, size: 9 }],
      })),
      { labelWidth: 108, labelColor: PDF_COLORS.europass, divider: true }
    );

    pdfSection(doc, "Work experience", PDF_COLORS.europass);
    pdfTable(
      doc,
      cvData.experience.map((job) => ({ label: job.dates, blocks: jobBlocks(job) })),
      { labelWidth: 108, labelColor: PDF_COLORS.europass, divider: true }
    );

    pdfSection(doc, "Education and training", PDF_COLORS.europass);
    pdfTable(doc, [
      {
        label: cvData.education.dates,
        blocks: [
          { text: cvData.education.degree, bold: true, size: 9.4, after: 1 },
          { text: cvData.education.institution, size: 8.6, color: PDF_COLORS.muted },
        ],
      },
    ], { labelWidth: 108, labelColor: PDF_COLORS.europass });

    pdfSection(doc, "Language skills", PDF_COLORS.europass);
    const mother = motherTongue(cvData);
    const languageRows = [];
    if (mother) {
      languageRows.push({
        label: "Mother tongue",
        blocks: [{ text: mother.name, size: 9 }],
      });
    }
    languageRows.push({
      label: "Other languages",
      blocks: otherLanguages(cvData).map((language) => ({
        text: `${language.name} - ${language.level} (${language.note})`,
        size: 9,
        after: 2,
      })),
    });
    pdfTable(doc, languageRows, {
      labelWidth: 108,
      labelColor: PDF_COLORS.europass,
      divider: true,
    });

    pdfSection(doc, "Digital skills", PDF_COLORS.europass);
    pdfTable(
      doc,
      cvData.digitalSkills.map((skill) => ({
        label: skill.label,
        blocks: [{ text: skill.value, size: 8.8 }],
      })),
      { labelWidth: 108, labelColor: PDF_COLORS.europass }
    );

    pdfSection(doc, "Certifications", PDF_COLORS.europass);
    pdfTable(
      doc,
      cvData.certifications.map((certification) => ({
        label: "Certificate",
        blocks: [{ text: certification, size: 8.8, bullet: true }],
      })),
      { labelWidth: 96, labelColor: PDF_COLORS.europass, divider: true }
    );

    pdfSection(doc, "Additional information", PDF_COLORS.europass);
    pdfTable(
      doc,
      cvData.additional.map((item) => ({
        label: "Note",
        blocks: [{ text: item, size: 8.8, bullet: true }],
      })),
      { labelWidth: 96, labelColor: PDF_COLORS.europass }
    );

    pdfFooter(doc, "Arul Muruga - Europass CV");
    doc.end();
    output.on("finish", () => resolve(fs.statSync(outFile).size));
    output.on("error", reject);
  });
}

/* ---------------------------------------------------------------- */
/* DOCX                                                              */
/* ---------------------------------------------------------------- */

const DOCX_PAGE_WIDTH = 11906;
const DOCX_PAGE_HEIGHT = 16838;
const DOCX_MARGIN = 800;
const DOCX_CONTENT_WIDTH = DOCX_PAGE_WIDTH - DOCX_MARGIN * 2;
const DOCX_COLORS = {
  ink: "1F2933",
  muted: "5B6672",
  accent: "17324D",
  europass: "003399",
  rule: "B9B2A5",
};

const noBorders = {
  top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};

const cellBorders = {
  top: { style: BorderStyle.SINGLE, size: 2, color: "E2DED5" },
  bottom: { style: BorderStyle.SINGLE, size: 2, color: "E2DED5" },
  left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};

function docxSectionHeading(text, accent) {
  return new Paragraph({
    spacing: { before: 280, after: 110 },
    border: {
      bottom: { color: DOCX_COLORS.rule, space: 4, style: BorderStyle.SINGLE, size: 4 },
    },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        size: 19,
        color: accent,
        characterSpacing: 20,
      }),
    ],
  });
}

function docxBlocks(blocks) {
  return blocks.map(
    (block) =>
      new Paragraph({
        ...(block.bullet ? { bullet: { level: 0 } } : {}),
        spacing: { after: block.after === 0 ? 0 : block.after ?? 60 },
        children: [
          new TextRun({
            text: block.text,
            bold: Boolean(block.bold),
            italics: Boolean(block.italics),
            size: block.size ?? 18,
            color: block.color ?? DOCX_COLORS.ink,
          }),
        ],
      })
  );
}

function docxTable(rows, options = {}) {
  const labelWidth = options.labelWidth ?? 1900;
  const labelColor = options.labelColor ?? DOCX_COLORS.muted;
  return new Table({
    width: { size: DOCX_CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [labelWidth, DOCX_CONTENT_WIDTH - labelWidth],
    borders: options.divider ? cellBorders : noBorders,
    rows: rows.map(
      (row) =>
        new TableRow({
          children: [
            new TableCell({
              width: { size: labelWidth, type: WidthType.DXA },
              borders: options.divider ? cellBorders : noBorders,
              verticalAlign: VerticalAlign.TOP,
              margins: { top: 70, bottom: 70, left: 0, right: 140 },
              children: [
                new Paragraph({
                  spacing: { after: 0 },
                  children: [
                    new TextRun({
                      text: row.label,
                      bold: true,
                      size: 17,
                      color: labelColor,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: { size: DOCX_CONTENT_WIDTH - labelWidth, type: WidthType.DXA },
              borders: options.divider ? cellBorders : noBorders,
              verticalAlign: VerticalAlign.TOP,
              margins: { top: 70, bottom: 70, left: 0, right: 0 },
              children: docxBlocks(row.blocks),
            }),
          ],
        })
    ),
  });
}

function docxJobBlocks(job) {
  const blocks = [
    { text: job.title, bold: true, size: 21, after: 20 },
    {
      text: `${job.org} · ${job.location}`,
      size: 18,
      color: DOCX_COLORS.muted,
      after: job.intro ? 40 : 70,
    },
  ];
  if (job.intro) {
    blocks.push({
      text: job.intro,
      italics: true,
      size: 17,
      color: DOCX_COLORS.muted,
      after: 60,
    });
  }
  job.bullets.forEach((bullet, index) => {
    blocks.push({
      text: bullet,
      bullet: true,
      size: 18,
      after: index === job.bullets.length - 1 ? 0 : 40,
    });
  });
  return blocks;
}

function docxFooter(text) {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
          new TextRun({ text: `${text}  |  Seite `, size: 15, color: "7A838C" }),
          new TextRun({ children: [PageNumber.CURRENT], size: 15, color: "7A838C" }),
          new TextRun({ text: " von ", size: 15, color: "7A838C" }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 15, color: "7A838C" }),
        ],
      }),
    ],
  });
}

function docxBase(cvData, children, footerText) {
  return new Document({
    creator: "Arul Muruga",
    title: cvData.docTitle,
    description: cvData.docDescription,
    styles: {
      default: {
        document: {
          run: { font: "Calibri", size: 20, color: DOCX_COLORS.ink },
          paragraph: { spacing: { line: 260 } },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: DOCX_PAGE_WIDTH, height: DOCX_PAGE_HEIGHT },
            margin: {
              top: DOCX_MARGIN,
              right: DOCX_MARGIN,
              bottom: DOCX_MARGIN,
              left: DOCX_MARGIN,
            },
          },
        },
        footers: { default: docxFooter(footerText) },
        children,
      },
    ],
  });
}

function buildLebenslaufDocx(cvData) {
  return docxBase(
    cvData,
    [
      new Paragraph({
        spacing: { after: 30 },
        children: [
          new TextRun({
            text: "LEBENSLAUF",
            bold: true,
            size: 18,
            color: DOCX_COLORS.accent,
            characterSpacing: 60,
          }),
        ],
      }),
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({
            text: "Arul Muruga",
            bold: true,
            size: 46,
            color: DOCX_COLORS.ink,
            characterSpacing: 8,
          }),
        ],
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: cvData.role, size: 20, color: DOCX_COLORS.muted })],
      }),
      new Paragraph({
        spacing: { after: 30 },
        children: [
          new TextRun({ text: "Tabellarischer Lebenslauf", size: 17, color: DOCX_COLORS.muted }),
        ],
      }),
      new Paragraph({
        border: {
          bottom: { color: DOCX_COLORS.accent, space: 6, style: BorderStyle.SINGLE, size: 8 },
        },
        spacing: { after: 120 },
        children: [],
      }),

      docxSectionHeading("Persönliche Daten", DOCX_COLORS.accent),
      docxTable(
        personalRows(cvData, LEBENSLAUF_LABELS).map(([label, value]) => ({
          label,
          blocks: [{ text: value, size: 18 }],
        })),
        { divider: true }
      ),

      docxSectionHeading("Beruflicher Werdegang", DOCX_COLORS.accent),
      docxTable(
        cvData.experience.map((job) => ({ label: job.dates, blocks: docxJobBlocks(job) })),
        { divider: true }
      ),

      docxSectionHeading("Ausbildung", DOCX_COLORS.accent),
      docxTable([
        {
          label: cvData.education.dates,
          blocks: [
            { text: cvData.education.degree, bold: true, size: 20, after: 20 },
            { text: cvData.education.institution, size: 18, color: DOCX_COLORS.muted },
          ],
        },
      ]),

      docxSectionHeading("Sprachkenntnisse", DOCX_COLORS.accent),
      docxTable(
        cvData.languages.map((language) => ({
          label: language.name,
          blocks: [
            {
              text: isMotherTongue(language)
                ? "Muttersprache"
                : `${language.level} - ${language.note}`,
              size: 18,
            },
          ],
        })),
        { labelWidth: 1700, divider: true }
      ),

      docxSectionHeading("IT-Kenntnisse", DOCX_COLORS.accent),
      docxTable(
        cvData.digitalSkills.map((skill) => ({
          label: skill.label,
          blocks: [{ text: skill.value, size: 18 }],
        }))
      ),

      docxSectionHeading("Zertifizierungen", DOCX_COLORS.accent),
      docxTable(
        cvData.certifications.map((certification) => ({
          label: "Zertifikat",
          blocks: [{ text: certification, size: 18, bullet: true }],
        })),
        { labelWidth: 1300, divider: true }
      ),

      docxSectionHeading("Zusätzliche Informationen", DOCX_COLORS.accent),
      docxTable(
        cvData.additional.map((item) => ({
          label: "Hinweis",
          blocks: [{ text: item, size: 18, bullet: true }],
        })),
        { labelWidth: 1300 }
      ),
    ],
    "Arul Muruga - Lebenslauf"
  );
}

function buildEuropassDocx(cvData) {
  return docxBase(
    cvData,
    [
      new Paragraph({
        spacing: { after: 10 },
        children: [
          new TextRun({
            text: "Europass",
            bold: true,
            size: 32,
            color: DOCX_COLORS.europass,
          }),
          new TextRun({
            text: "\tCurriculum vitae",
            size: 17,
            color: DOCX_COLORS.muted,
            characterSpacing: 30,
          }),
        ],
      }),
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({
            text: "Arul Muruga",
            bold: true,
            size: 46,
            color: DOCX_COLORS.ink,
            characterSpacing: 8,
          }),
        ],
      }),
      new Paragraph({
        spacing: { after: 40 },
        border: {
          bottom: {
            color: DOCX_COLORS.europass,
            space: 6,
            style: BorderStyle.SINGLE,
            size: 8,
          },
        },
        children: [
          new TextRun({ text: cvData.role, size: 20, color: DOCX_COLORS.muted }),
        ],
      }),

      docxSectionHeading("Personal information", DOCX_COLORS.europass),
      docxTable(
        personalRows(cvData, EUROPASS_LABELS).map(([label, value]) => ({
          label,
          blocks: [{ text: value, size: 18 }],
        })),
        { labelWidth: 1850, labelColor: DOCX_COLORS.europass, divider: true }
      ),

      docxSectionHeading("Work experience", DOCX_COLORS.europass),
      docxTable(
        cvData.experience.map((job) => ({ label: job.dates, blocks: docxJobBlocks(job) })),
        { labelWidth: 1850, labelColor: DOCX_COLORS.europass, divider: true }
      ),

      docxSectionHeading("Education and training", DOCX_COLORS.europass),
      docxTable(
        [
          {
            label: cvData.education.dates,
            blocks: [
              { text: cvData.education.degree, bold: true, size: 20, after: 20 },
              { text: cvData.education.institution, size: 18, color: DOCX_COLORS.muted },
            ],
          },
        ],
        { labelWidth: 1850, labelColor: DOCX_COLORS.europass }
      ),

      docxSectionHeading("Language skills", DOCX_COLORS.europass),
      docxTable(
        [
          ...(motherTongue(cvData)
            ? [
                {
                  label: "Mother tongue",
                  blocks: [{ text: motherTongue(cvData).name, size: 18 }],
                },
              ]
            : []),
          {
            label: "Other languages",
            blocks: otherLanguages(cvData).map((language) => ({
              text: `${language.name} - ${language.level} (${language.note})`,
              size: 18,
              after: 40,
            })),
          },
        ],
        { labelWidth: 1850, labelColor: DOCX_COLORS.europass, divider: true }
      ),

      docxSectionHeading("Digital skills", DOCX_COLORS.europass),
      docxTable(
        cvData.digitalSkills.map((skill) => ({
          label: skill.label,
          blocks: [{ text: skill.value, size: 18 }],
        })),
        { labelWidth: 1850, labelColor: DOCX_COLORS.europass }
      ),

      docxSectionHeading("Certifications", DOCX_COLORS.europass),
      docxTable(
        cvData.certifications.map((certification) => ({
          label: "Certificate",
          blocks: [{ text: certification, size: 18, bullet: true }],
        })),
        { labelWidth: 1650, labelColor: DOCX_COLORS.europass, divider: true }
      ),

      docxSectionHeading("Additional information", DOCX_COLORS.europass),
      docxTable(
        cvData.additional.map((item) => ({
          label: "Note",
          blocks: [{ text: item, size: 18, bullet: true }],
        })),
        { labelWidth: 1650, labelColor: DOCX_COLORS.europass }
      ),
    ],
    "Arul Muruga - Europass CV"
  );
}

/* ---------------------------------------------------------------- */
/* run                                                               */
/* ---------------------------------------------------------------- */

fs.mkdirSync(OUT_DIR, { recursive: true });

const jobs = [
  {
    cvData: lebenslauf,
    pdf: writeLebenslaufPdf,
    docx: buildLebenslaufDocx,
  },
  {
    cvData: europass,
    pdf: writeEuropassPdf,
    docx: buildEuropassDocx,
  },
];

for (const job of jobs) {
  const pdfFile = path.join(OUT_DIR, `${job.cvData.fileBase}.pdf`);
  const pdfSize = await job.pdf(job.cvData, pdfFile);
  console.log(`Wrote ${pdfFile} (${pdfSize.toLocaleString()} bytes)`);

  const docxFile = path.join(OUT_DIR, `${job.cvData.fileBase}.docx`);
  const buffer = await Packer.toBuffer(job.docx(job.cvData));
  fs.writeFileSync(docxFile, buffer);
  console.log(`Wrote ${docxFile} (${buffer.length.toLocaleString()} bytes)`);
}
