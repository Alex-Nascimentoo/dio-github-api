import './css/app.css'
import Layout from './components/layout'
import Profile from './components/profile';
import Repos from './components/repos';
import useGithub from './hooks/githubHooks';
import NoSearch from './components/noSearch';

function App() {
  const { githubState } = useGithub()

  return (
    <Layout>
      {
        githubState.hasUser ? (
          <>
            {
              githubState.loading ? (
                <p>Loading</p>
              ) : (
                <>
                  <Profile />
                  <Repos />
                </>
            )}
          </>
        ) : (
          <NoSearch />
      )}
    </Layout>
  );
}

export default App;
