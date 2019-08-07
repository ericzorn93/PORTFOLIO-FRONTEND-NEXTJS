import Layout from "../src/client/components/Layout";

interface IAboutPageProps {
  todos: any[];
}

const AboutPage = (props: IAboutPageProps) => (
  <Layout>
    <h1>About</h1>
    {props.todos[0].title}
  </Layout>
);

AboutPage.getInitialProps = (props: any) => {
  const { query } = props;

  return {
    todos: query.todos
  };
};

export default AboutPage;
