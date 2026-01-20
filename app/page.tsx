export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 tracking-wide">
        Xamaya Print Shop
      </h1>

      <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
  <a className="bg-gray-200 shadow-md rounded-xl p-5 text-center text-lg font-semibold text-gray-900 hover:bg-gray-300 active:scale-95 transition">
    Sublimación
  </a>

  <a className="bg-gray-200 shadow-md rounded-xl p-5 text-center text-lg font-semibold text-gray-900 hover:bg-gray-300 active:scale-95 transition">
    UV Print
  </a>

  <a className="bg-gray-200 shadow-md rounded-xl p-5 text-center text-lg font-semibold text-gray-900 hover:bg-gray-300 active:scale-95 transition">
    Grabado Láser
  </a>

  <a className="bg-gray-200 shadow-md rounded-xl p-5 text-center text-lg font-semibold text-gray-900 hover:bg-gray-300 active:scale-95 transition">
    Acrílicos
  </a>

  <a className="bg-blue-600 text-white shadow-md rounded-xl p-5 text-center text-lg font-semibold hover:bg-blue-700 active:scale-95 transition">
    Personalizar
  </a>
</div>
    </main>
  );
}