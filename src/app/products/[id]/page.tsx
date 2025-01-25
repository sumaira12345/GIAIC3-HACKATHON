import ProductDetails from "@/app/components/productDetails/ProductDetails";

interface Iparams {
  id: string;
}

export default async function ProductDetailsPage  ({ params }: { params: Promise<Iparams> }) {
  const { id } = await params;
  return (
    <ProductDetails productId={id} />
  );
};
