export function convertToReadableDate(dateString: string): string {
  // Parse the date string
  const date = new Date(dateString);

  // Format the date
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  // output example : 18 Mei 2024 pukul 18.55.16
  return date.toLocaleDateString("id-ID", options);
}
