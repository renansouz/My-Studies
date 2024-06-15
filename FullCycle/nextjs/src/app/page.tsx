import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4"> 
      <h1 className="text-2xl font-bold mb-8">Show disponíveis</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg">
          <img/>
          <div className="p-4">
            <h2 className="text-xl text-black font-bold">Show do Radiohead</h2>
            <p className="text-gray-700 mt-2">
              SAB, 15/06/2024
            </p>
            <p className="text-gray-700 mt-2">Tem 10 lugares disponíveis</p>
            <p className="text-gray-700 mt-2">R$ 500</p>
            <p>
              <button>Reservar lugar</button>
            </p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg">
          <img/>
          <div className="p-4">
            <h2 className="text-xl text-black font-bold">Show do Radiohead</h2>
            <p className="text-gray-700 mt-2">
              SAB, 15/06/2024
            </p>
            <p className="text-gray-700 mt-2">Tem 10 lugares disponíveis</p>
            <p className="text-gray-700 mt-2">R$ 500</p>
            <p>
              <button>Reservar lugar</button>
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg">
          <img/>
          <div className="p-4">
            <h2 className="text-xl text-black font-bold">Show do Radiohead</h2>
            <p className="text-gray-700 mt-2">
              SAB, 15/06/2024
            </p>
            <p className="text-gray-700 mt-2">Tem 10 lugares disponíveis</p>
            <p className="text-gray-700 mt-2">R$ 500</p>
            <p>
              <button>Reservar lugar</button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
