import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center p-6"
      style={{
        backgroundImage: "url('/images/xamaya-bg.png')",
      }}
    >
      {/* LOGO */}
      <div className="mt-10 mb-10">
        <Image
          src="/images/xamaya-logo.png"
          width={300}
          height={200}
          alt="Xamaya Print Shop Logo"
          priority
        />
      </div>

      {/* BOTONES */}
      <div className="grid grid-cols-1 gap-5 w-full max-w-sm">

        {/* Sublimación */}
        <Link
          href="/sublimacion de productos"
          className="flex items-center gap-4 bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-4 hover:bg-white active:scale-95 transition"
        >
          <Image
            src="https://img.icons8.com/?size=512&id=23264&format=png"
            width={50}
            height={50}
            alt="Sublimación"
          />
          <span className="text-xl font-semibold text-gray-900">Sublimación</span>
        </Link>

        {/* UV Print */}
        <Link
          href="/uv-print"
          className="flex items-center gap-4 bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-4 hover:bg-white active:scale-95 transition"
        >
          <Image
            src="https://img.icons8.com/?size=512&id=59833&format=png"
            width={50}
            height={50}
            alt="UV Print"
          />
          <span className="text-xl font-semibold text-gray-900">UV Print</span>
        </Link>

        {/* Grabado Láser */}
        <Link
          href="/laser"
          className="flex items-center gap-4 bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-4 hover:bg-white active:scale-95 transition"
        >
          <Image
            src="https://img.icons8.com/?size=512&id=59830&format=png"
            width={50}
            height={50}
            alt="Grabado Láser"
          />
          <span className="text-xl font-semibold text-gray-900">Grabado Láser</span>
        </Link>

        {/* Acrílicos */}
        <Link
          href="/acrilicos"
          className="flex items-center gap-4 bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-4 hover:bg-white active:scale-95 transition"
        >
          <Image
            src="https://img.icons8.com/?size=512&id=59827&format=png"
            width={50}
            height={50}
            alt="Acrílicos"
          />
          <span className="text-xl font-semibold text-gray-900">Acrílicos</span>
        </Link>

        {/* Personalizar */}
        <Link
          href="/personalizar"
          className="flex items-center gap-4 bg-blue-600 text-white shadow-lg rounded-xl p-4 hover:bg-blue-700 active:scale-95 transition"
        >
          <Image
            src="https://img.icons8.com/?size=512&id=59836&format=png"
            width={50}
            height={50}
            alt="Personalizar"
          />
          <span className="text-xl font-semibold">Personalizar</span>
        </Link>
      </div>
    </main>
  );
}