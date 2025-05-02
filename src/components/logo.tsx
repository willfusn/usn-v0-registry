export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-8"
        role="graphics-symbol"
      >
        <circle className="fill-brand-one" cx="13.5" cy="6.5" r="2.5" />
        <circle className="fill-brand-two" cx="19" cy="13" r="2.5" />
        <circle className="fill-brand-three" cx="13.5" cy="19.5" r="2.5" />
        <circle className="fill-brand-four" cx="6.5" cy="13" r="2.5" />
      </svg>

      <h1 className="font-bold">Design Registry</h1>
    </div>
  );
}
