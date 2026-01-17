export const dynamic = "force-dynamic";

export default async function Product({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
  return (
    <div>
        <h1>Stai guardando il prodotto numero: {id}</h1>
    </div>
  );
}
