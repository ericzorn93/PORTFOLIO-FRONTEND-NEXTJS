import Layout from "../src/client/components/Layout";

// interface IAboutPageProps {
//   todos: any[];
// }

const AboutPage = (props: any) => (
  <Layout>
    <h1>About</h1>
    <p>{props.todos[0].title}</p>
  </Layout>
);

AboutPage.getInitialProps = (props: any) => {
  const { query } = props;

  return {
    todos: query.todos
  };
};

export default AboutPage;
