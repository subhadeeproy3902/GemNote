const categories = [
  "All",
  "Personal",
  "Work",
  "Study",
] as const;

export const catColors = [
  "#EDF2F7",
  "#E2E8F0",
  "#CBD5E0",
  "#A0AEC0",
];

type CategoryColors = {
  [category: string]: string;
};

export const categoryColors: CategoryColors = {
  All: "#11b6ca",
  Personal: "#4299E1",
  Work: "#2B6CB0",
  Study: "#9820c0",
};

export default categories;
