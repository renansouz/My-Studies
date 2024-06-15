import Link from "next/link";
import { EventModel } from "../models";
import Image from "next/image";

async function getEvents(): Promise<EventModel[]> {
  const response = await fetch('http://localhost:8000/events' , {
    cache: "no-store", // without cache
    // next: {
    //   revalidate: 10 // seconds
    // }
  });
  
  return response.json()
}

export default async function Home() {
  const events = await getEvents()
  return (
    <main className="container mx-auto py-8 px-4"> 
      <h1 className="text-2xl font-bold mb-8">Show disponíveis</h1>
      <div className="grid grid-cols-3 gap-8">
          {events.map((event, key) => (
            <div key={key} className="bg-white shadow-lg rounded-lg">
            <Image 
              className="w-full h-48 object-cover" 
              src={event.image_url} 
              alt={event.name}
              width={300}
              height={200}
            />
            <div className="p-4">
              <h2 className="text-xl text-black font-bold">
                {event.name}
              </h2>
              <p className="text-gray-700 mt-2">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mt-2">Tem {event.available_spots} lugares disponíveis</p>
              <p className="text-gray-700 mt-2">R$ {event.price.toFixed(2).replace('.', ',')}</p>
              <p className="text-gray-700 mt-2">
                <Link 
                  href={`/events/${event.id}/spots-layout`}
                  className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                >
                  Reservar lugar
                </Link>
              </p>
            </div>
          </div>
          ))}
        
      </div>
    </main>
  );
}
