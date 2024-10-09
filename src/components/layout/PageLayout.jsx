export default function PageLayout({ children }) {
  return (
    <div className="pt-6 pb-12 px-4">
      <main className="max-w-xl container mx-auto bg-white min-h-96 rounded-xl shadow-xl p-6">
        {children}
      </main>
    </div>
  );
}
