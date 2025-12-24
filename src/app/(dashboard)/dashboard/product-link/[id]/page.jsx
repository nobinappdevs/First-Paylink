import ProductLinkTable from "@/components/dashboard/productLink/ProductLinkTable";


const page = async ({params})  => {
  const {id} = await params
    return (
        <div className="xl:p-8 p-4">
          <ProductLinkTable id={id} />
        </div>
    );
};

export default page;