export const cleanHtmlContent = (html: string) => {
  console.log(html.replace(/\\n/g, "<br>").replace(/\\/g, ""));
  return html.replace(/\\n/g, "<br>").replace(/\\/g, "");
};
