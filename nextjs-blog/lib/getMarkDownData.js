import matter from "gray-matter";
import { remark } from "remark";
import fs from "fs";
import path from "path";
import html from "remark-html";

// const fileContents = (pa) => {
//   console.log(filePath);

//   return;
// };

export default async function getSortedMarkdownData(pa) {
  const filePath = path.join(process.cwd(), pa);

  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...matterResult.data,
  };
}
