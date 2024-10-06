export const Footer = () => (
  <footer className="pb-4 px-4 flex justify-between items-center border-t sticky bottom-0 bg-background/80">
    <div className="flex gap-1 mt-2">
      <p>{new Date().getFullYear()}</p>
      <a
        href="https://abhirath.net"
        className="hover:underline decoration-teal-500"
      >
        Abhi
      </a>
    </div>
    <ul className="flex gap-2 mt-2">
      <li>
        <a href="/" className="hover:underline decoration-teal-500">
          home
        </a>
      </li>
      <li>
        <a
          href="https://github.com/TalkativeDiv/filter-system"
          className="hover:underline decoration-teal-500"
        >
          github
        </a>
      </li>
    </ul>
  </footer>
);
