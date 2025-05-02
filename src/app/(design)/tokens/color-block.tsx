interface ColorBlockProps {
  name: string;
  variable: string;
  className?: string;
}

export function ColorBlock({ name, variable, className }: ColorBlockProps) {
  return (
    <div className={`rounded-lg p-4 ${className}`}>
      <div className="flex h-full flex-col">
        <div className="flex flex-col items-start justify-between gap-1">
          <h3 className="font-medium">{name}</h3>
          <div className="font-mono text-xs italic opacity-80">{variable}</div>
        </div>
        <div className="mt-auto">
          <p className="mt-4 text-sm">
            The quick brown fox jumps over the lazy dog
          </p>
          <div className="mt-2 flex gap-2">
            <div className="h-6 w-6 rounded-full bg-current opacity-25" />
            <div className="h-6 w-6 rounded-full bg-current opacity-50" />
            <div className="h-6 w-6 rounded-full bg-current opacity-75" />
            <div className="h-6 w-6 rounded-full bg-current" />
          </div>
        </div>
      </div>
    </div>
  );
}
