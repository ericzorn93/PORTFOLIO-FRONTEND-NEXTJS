import Layout from "../src/components/Layout";

// interface IAboutPageProps {
//   todos: any[];
// }

const AboutPage = (props: any) => {
  console.log(props);

  return (
    <Layout>
      <h1>About</h1>
    </Layout>
  );
};

AboutPage.getInitialProps = (props: any) => {
  const { query } = props;

  return {
    todos: query.todos
  };
};

export default AboutPage;
