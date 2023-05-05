import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ChannelDetail, VideoDetail, SearchFeed, Feed } from './components';
import Layout from './containers/Layout';
import { BASE_URI } from './utils/constants';

const App = () => (
  <BrowserRouter basename={BASE_URI}>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
