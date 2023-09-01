import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("5ee99b58-9055-4162-875b-1c725b1206d4");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dewvrpoqt/image/upload/v1691763702/dhgxnicoxecycgny0ykx.png)`
            }}
            className="rounded-xl bg-center aspect-square md:aspect-[1.5/1] overflow-hidden bg-cover"
          />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
