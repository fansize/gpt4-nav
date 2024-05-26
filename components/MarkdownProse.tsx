import Markdown from 'react-markdown';

export default function MarkdownProse({ markdown, className }: { markdown: string; className?: string }) {
  return (
    <article className='prose mx-auto max-w-pc pb-8'>
      <Markdown className={`${className}`}>{markdown}</Markdown>
    </article>
  );
}
