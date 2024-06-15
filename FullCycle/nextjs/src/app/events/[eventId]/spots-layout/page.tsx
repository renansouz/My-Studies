export async function SpotLayoutPage({
  params,
}: {
  params: { eventId: string };
}) {
  return <p>{params.eventId}</p>
}