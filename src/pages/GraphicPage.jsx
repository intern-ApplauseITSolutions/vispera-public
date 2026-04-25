import Layout from "../components/layout/Layout";
import Graphic from "../components/services/Graphic";

export default function GraphicPage() {
  return (
    <Layout>
      <div className="mt-16 md:mt-20 lg:mt-24">
        <Graphic />
      </div>
    </Layout>
  );
}