import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import sanitizeHtml from "sanitize-html";

export function loader() {
  const html = sanitizeHtml("<p>Hello world</p>");
  return json(html);
}

export default function Index() {
  const __html = useLoaderData();

  return <div dangerouslySetInnerHTML={{ __html }}></div>;
}
