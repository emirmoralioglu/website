import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const OUT_FILE = path.join(process.cwd(), "src/content/posts.json");

const files = fs.existsSync(BLOG_DIR)
  ? fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"))
  : [];

const posts = await Promise.all(
  files.map(async (file) => {
    const slug = file.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(source);
    const html = String(
      await remark().use(remarkHtml, { sanitize: false }).process(content),
    );
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category ?? "genel",
      html,
    };
  }),
);

posts.sort((a, b) => (a.date < b.date ? 1 : -1));

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(posts, null, 2));

console.log(`Generated ${posts.length} blog post(s) -> ${path.relative(process.cwd(), OUT_FILE)}`);
