import * as sanitizeHtml from "sanitize-html"

export default function Index() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml("<p>Hello world</p>"),
      }}
    ></div>
  );
}
