import OcaHeader from "@/components/layout/OcaHeader";

export default function SegurosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f4]">
      <OcaHeader />
      <main className="flex-1 max-w-md mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
