const JUDGING_ITEMS = [
  {
    category: "Content",
    item: "Speech Development",
    elements: "Structure, Organization, Support Material",
    range: { min: 0, max: 20, step: 1, value: 10 },
    ranges: [
      { t: "fair", min: 0, max: 8, color: "#d4f1f4" },
      { t: "good", min: 9, max: 13, color: "#75e6da" },
      { t: "very good", min: 14, max: 19, color: "#189ab4" },
      { t: "excellent", min: 20, max: 20, color: "#05445e" },
    ],
    description:
      "is the way the speaker puts ideas together so the audience can understand them. The speech is structured around a purpose, and this structure must include an opening, body and conclusion. A good speech immediately engages the audience’s attention and then moves forward toward a significant conclusion. This development of the speech structure is supported by relevant examples and illustrations, facts and figures, delivered with such smoothness that they blend into the framework of the speech to present the audience with a unified whole.",
  },
  {
    category: "Content",
    item: "Effectiveness",
    elements: "Achievement of Purpose, Interest, Reception",
    range: { min: 0, max: 15, step: 1, value: 8 },
    ranges: [
      { t: "fair", min: 0, max: 5, color: "#d4f1f4" },
      { t: "good", min: 6, max: 10, color: "#75e6da" },
      { t: "very good", min: 11, max: 14, color: "#189ab4" },
      { t: "excellent", min: 15, max: 15, color: "#05445e" },
    ],
    description:
      "is measured in part by the audience’s reception of the speech, but a large part is your subjective judgement of how the speech came across. You should ask yourself such questions as “Was I able to determine the speaker’s purpose?” “Did the speech relate directly to that purpose?” “Was the audience’s interest held by the speaker?” “Was this speech subject appropriate for this particular audience?”",
  },
];

const CONTESTANTS = [
  "Mark Twain",
  "Albert Einstein",
  "Capitan Jack Sparrow",
  "Nicola Tesla",
];

const SHORTS = ["Mark", "Albert", "Capitan", "Nicola"];

const SCORES = CONTESTANTS.map((_) => JUDGING_ITEMS.map((_) => -1));

for (let item of JUDGING_ITEMS) {
  const ranges = item.ranges;
  const n = ranges.length;
  for (let i = 0; i < n; i++) {
    ranges[i].hMin = ranges[i].min + (i > 0 ? -0.5 : 0);
    ranges[i].hMax = ranges[i].max + (i + 1 < n ? 0.5 : 0);
  }
}
