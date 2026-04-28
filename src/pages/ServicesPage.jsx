import Layout from "../components/layout/Layout";
import HeaderBanner from "../components/common/HeaderBanner";
import Services from "../components/services/Services";

export default function ServicesPage() {
  return (
    <Layout>
      <div className="mt-16 md:mt-20 lg:mt-22">
        <HeaderBanner title="Our Services" />
      </div>
      <Services />
    </Layout>
  );
}
