import Card from "@/components/Card";
import { createClient } from "@/supabase/client"
// const products = [{
//   id: 0,
//   name: "Mushroom Orange Lamp",
//   description:"Mushroom Orange Lamp desctiption Mushroom Orange Lamp desctiption Mushroom Orange Lamp desctiption Mushroom Orange Lamp desctiption Mushroom Orange Lamp desctiption ",
//   price: 40,
//   imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyE7vPfgc2QNJPEMGKnRBo0yvMDYZ_uL0lZg&s"
  
// }]
export default async function Home() {
  const supabase = createClient();
  const { data: products } = await supabase
    .from('easysell-products')
    .select();

  if (!products) {
    return <p>Not Found</p>;
  }

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-12 xl:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product,index) => (
          <Card
            key={`${product?.name}-${product?.id}`}
            {...product}
            imageUrl={`${process.env.SUPABASE_URL}/storage/v1/object/public/storage//${product.imageUrl}`}
            priority={index === 0}
          />
        ))}
      </div>
    </main> 
  );
}

