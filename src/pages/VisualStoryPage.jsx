import Layout from "../components/layout/Layout";
import VisualStory from "../components/services/VisualStory";

export default function VisualStoryPage() {
  return (
    <Layout>
      <div className="mt-16 md:mt-20 lg:mt-24">
        <VisualStory />
      </div>
    </Layout>
  );
}