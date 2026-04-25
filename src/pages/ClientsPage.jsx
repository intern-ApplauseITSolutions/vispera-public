import Layout from "../components/layout/Layout";
import HeaderBanner from "../components/common/HeaderBanner";
import Clients from "../components/home/Clients";

export default function ClientsPage() {
  return (
    <Layout>
      <div className="mt-16 md:mt-20 lg:mt-24">
        <HeaderBanner title="Clients" />
      </div>
      <Clients hideViewAllButton={true} />
    </Layout>
  );
}
