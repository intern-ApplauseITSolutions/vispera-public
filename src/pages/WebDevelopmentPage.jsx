import Layout from "../components/layout/Layout";
import WebDevelopment from "../components/services/webdevelopment";

export default function WebDevelopmentPage() {
  return (
    <Layout>
      <div className="mt-16 md:mt-20 lg:mt-22">
        <WebDevelopment />
      </div>
    </Layout>
  );
}
