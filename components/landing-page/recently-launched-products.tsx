import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";

export default async function RecentlyLaunchedProducts() {
  const RecentlyLaunchedProducts = await
    getRecentlyLaunchedProducts();


  return (
    <section className="py-20 ">
      <div className="wrapper">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the lastest products from our community"
        />
        {RecentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {RecentlyLaunchedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  // Creiamo la proprietà 'vote_count' usando il valore di 'voteCount'
                  vote_count: product.voteCount,

                  // Se TypeScript si lamenta anche di altri campi (come 'website_url'), aggiungili qui:
                  website_url: product.websiteUrl,
                } as any} // 'as any' serve per bypassare l'errore mentre sistemi i tipi
              />
              // <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launched in the last week. Check back soon for new launches."
            icon={CalendarIcon}
          />
        )}
      </div>
    </section>
  );
}
