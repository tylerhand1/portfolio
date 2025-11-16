export default function NotFound() {
  return (
    <div className="h-dvh flex flex-col justify-center items-center">
      <h1 className="font-medium text-2xl md:text-4xl lg:text-6xl">
        404 - Not Found
      </h1>
      <p className="text-fg-secondary text-lg md:text-2xl lg:text-4xl">
        Could not find requested resource
      </p>
    </div>
  );
}
