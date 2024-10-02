import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNowStrict } from "date-fns";
import locale from "date-fns/locale/en-US";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const formatDistanceLocale = {
  lessThanXSeconds: "just now",
  xSeconds: "just now",
  halfAMinute: "just now",
  lessThanXMinutes: "{{count}} minute(s)",
  xMinutes: "{{count}} minute(s)",
  aboutXHours: "{{count}} hour(s)",
  xHours: "{{count}} hour(s)",
  xDays: "{{count}} day(s)",
  aboutXWeeks: "{{count}} week(s)",
  xWeeks: "{{count}} week(s)",
  aboutXMonths: "{{count}} month(s)",
  xMonths: "{{count}} month(s)",
  aboutXYears: "{{count}} year(s)",
  xYears: "{{count}} year(s)",
  overXYears: "{{count}} year(s)",
  almostXYears: "{{count}} year(s)",
};

function formatDistance(token, count, options) {
  options = options || {};

  const result = formatDistanceLocale[token].replace(
    "{{count}}",
    count.toString()
  );

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return "in " + result;
    } else {
      if (result === "just now") return result;
      return result + " ago";
    }
  }

  return result;
}

export function formatTimeToNow(date) {
  return formatDistanceToNowStrict(date, {
    addSuffix: true,
    locale: {
      ...locale,
      formatDistance,
    },
  });
}
