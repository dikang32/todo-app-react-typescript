export const getColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "#F73446";
    case "medium":
      return "#FFBD21";
    case "low":
      return "#0AC947";
  }
};
