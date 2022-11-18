import { Layout } from 'components/layout';
import { AboutMe } from 'components/sections/home/aboutMe';
import { Banner } from 'components/sections/home/banner';
import { Education } from 'components/sections/home/education';
import { Experience } from 'components/sections/home/experience';

interface HomeProps {}

export default function HomePage() {
  return (
    <Layout>
      <Banner />
      <AboutMe />
      <Education />
      <Experience />
    </Layout>
  );
}
