import fs from "node:fs";
import path from "node:path";
import {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  Packer,
  PageNumber,
  Paragraph,
  TabStopType,
  TextRun,
} from "docx";
import { cvLocales } from "./cv-content.mjs";

const PAGE_WIDTH = 11906;
const PAGE_HEIGHT = 16838;
const MARGIN = 800;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const COLORS = {
  ink: "1F2933",
  muted: "5B6672",
  accent: "17324D",
  rule: "B9B2A5",
};

const sectionHeading = (text) =>
  new Paragraph({
    spacing: { before: 260, after: 110 },
    border: {
      bottom: {
        color: COLORS.rule,
        space: 4,
        style: BorderStyle.SINGLE,
        size: 4,
      },
    },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        size: 21,
        color: COLORS.accent,
        characterSpacing: 20,
      }),
    ],
  });

const body = (text, options = {}) =>
  new Paragraph({
    spacing: { after: 80 },
    children: [new TextRun({ text, size: 20, color: COLORS.ink, ...options })],
  });

const bullet = (text) =>
  new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 45 },
    children: [new TextRun({ text, size: 20, color: COLORS.ink })],
  });

function buildDocument(cv) {
  return new Document({
    creator: "Arul Muruga",
    title: cv.docTitle,
    description: cv.docDescription,
    styles: {
      default: {
        document: {
          run: { font: "Calibri", size: 20, color: COLORS.ink },
          paragraph: { spacing: { line: 260 } },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: PAGE_WIDTH, height: PAGE_HEIGHT },
            margin: {
              top: MARGIN,
              right: MARGIN,
              bottom: MARGIN,
              left: MARGIN,
            },
          },
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: `${cv.labels.footer}  |  ${cv.labels.page} `,
                    size: 15,
                    color: "7A838C",
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    size: 15,
                    color: "7A838C",
                  }),
                  new TextRun({
                    text: ` ${cv.labels.of} `,
                    size: 15,
                    color: "7A838C",
                  }),
                  new TextRun({
                    children: [PageNumber.TOTAL_PAGES],
                    size: 15,
                    color: "7A838C",
                  }),
                ],
              }),
            ],
          }),
        },
        children: [
          new Paragraph({
            spacing: { after: 20 },
            children: [
              new TextRun({
                text: cv.name,
                bold: true,
                size: 44,
                color: COLORS.accent,
                characterSpacing: 10,
              }),
            ],
          }),
          new Paragraph({
            spacing: { after: 90 },
            children: [
              new TextRun({
                text: cv.role,
                size: 20,
                color: COLORS.muted,
              }),
            ],
          }),
          ...cv.contact.map(
            (line, index) =>
              new Paragraph({
                spacing: {
                  after: index === cv.contact.length - 1 ? 20 : 8,
                },
                ...(index === cv.contact.length - 1
                  ? {
                      border: {
                        bottom: {
                          color: COLORS.accent,
                          space: 6,
                          style: BorderStyle.SINGLE,
                          size: 8,
                        },
                      },
                    }
                  : {}),
                children: [
                  new TextRun({
                    text: line.join("   |   "),
                    size: 18,
                    color: COLORS.muted,
                  }),
                ],
              })
          ),

          sectionHeading(cv.labels.summary),
          body(cv.summary),

          sectionHeading(cv.labels.achievements),
          ...cv.achievements.map(bullet),

          sectionHeading(cv.labels.experience),
          ...cv.experience.flatMap((job) => [
            new Paragraph({
              tabStops: [
                { type: TabStopType.RIGHT, position: CONTENT_WIDTH },
              ],
              spacing: { before: 170, after: 15 },
              children: [
                new TextRun({
                  text: job.title,
                  bold: true,
                  size: 22,
                  color: COLORS.ink,
                }),
                new TextRun({
                  text: `\t${job.dates}`,
                  size: 18,
                  color: COLORS.muted,
                }),
              ],
            }),
            new Paragraph({
              spacing: { after: 45 },
              children: [
                new TextRun({
                  text: job.org,
                  bold: true,
                  size: 19,
                  color: COLORS.accent,
                }),
                new TextRun({
                  text: `   |   ${job.location}`,
                  size: 18,
                  color: COLORS.muted,
                }),
              ],
            }),
            ...(job.intro
              ? [
                  new Paragraph({
                    spacing: { after: 70 },
                    children: [
                      new TextRun({
                        text: job.intro,
                        italics: true,
                        size: 18,
                        color: COLORS.muted,
                      }),
                    ],
                  }),
                ]
              : []),
            ...job.bullets.map(bullet),
          ]),

          sectionHeading(cv.labels.education),
          new Paragraph({
            tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
            spacing: { before: 60, after: 15 },
            children: [
              new TextRun({
                text: cv.education.degree,
                bold: true,
                size: 21,
              }),
              new TextRun({
                text: `\t${cv.education.dates}`,
                size: 18,
                color: COLORS.muted,
              }),
            ],
          }),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: cv.education.institution,
                size: 19,
                color: COLORS.muted,
              }),
            ],
          }),

          sectionHeading(cv.labels.languages),
          ...cv.languages.map(
            (language) =>
              new Paragraph({
                spacing: { after: 45 },
                children: [
                  new TextRun({
                    text: language.name,
                    bold: true,
                    size: 20,
                  }),
                  new TextRun({
                    text: `  -  ${language.level}`,
                    bold: true,
                    size: 20,
                    color: COLORS.accent,
                  }),
                  new TextRun({
                    text: `  -  ${language.note}`,
                    size: 19,
                    color: COLORS.muted,
                  }),
                ],
              })
          ),

          sectionHeading(cv.labels.digital),
          ...cv.digitalSkills.map(
            (skill) =>
              new Paragraph({
                spacing: { after: 55 },
                children: [
                  new TextRun({
                    text: `${skill.label}: `,
                    bold: true,
                    size: 20,
                  }),
                  new TextRun({
                    text: skill.value,
                    size: 20,
                    color: COLORS.ink,
                  }),
                ],
              })
          ),

          sectionHeading(cv.labels.certifications),
          ...cv.certifications.map(bullet),

          sectionHeading(cv.labels.additional),
          ...cv.additional.map(bullet),
        ],
      },
    ],
  });
}

const outDir = path.resolve("public");
fs.mkdirSync(outDir, { recursive: true });

const requested = process.argv.slice(2).filter(Boolean);
const codes = requested.length ? requested : Object.keys(cvLocales);

for (const code of codes) {
  const cv = cvLocales[code];
  if (!cv) {
    console.error(`Unknown CV locale: ${code}`);
    process.exitCode = 1;
    continue;
  }
  const outFile = path.join(outDir, `${cv.fileBase}.docx`);
  const buffer = await Packer.toBuffer(buildDocument(cv));
  fs.writeFileSync(outFile, buffer);
  console.log(`Wrote ${outFile} (${buffer.length.toLocaleString()} bytes)`);
}
