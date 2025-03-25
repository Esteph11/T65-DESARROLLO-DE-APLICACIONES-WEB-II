import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';  

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 sm:p-20">
      {/* Encabezado */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
        Panel de Productos
      </h1>

      {/* Contenedor de enlaces */}
      <div className="flex flex-col gap-6 bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <Link href="/Promedio">
          <div className="p-4 bg-blue-700 text-white rounded-lg text-center font-medium transition hover:bg-blue-500 cursor-pointer">
            Promedio de productos por segmento
          </div>
        </Link>

        <Link href="/Suma">
          <div className="p-4 bg-green-700 text-white rounded-lg text-center font-medium transition hover:bg-green-600 cursor-pointer">
            Cantidad de productos por marca
          </div>
        </Link>

        <Link href="/Valor">
          <div className="p-4 bg-gray-500 text-white rounded-lg text-center font-medium transition hover:bg-gray-500 cursor-pointer">
            Valor de productos por categoría
          </div>
        </Link>
      </div>
    </div>
  );
}
