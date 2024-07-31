export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <div className="inline-block rounded-lg bg-white text-black font-medium px-3 py-1 text-sm">
              Something is Cooking
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Coming Soon
            </h1>
            <p className="mt-4 text-muted-foreground">
              We&apos;re hard at work preparing something special. Stay tuned
              for more updates!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
