import { useState } from "react";
import { Search } from "./components/Search";
import { VideoDashboard } from "./components/VideoDashboard";
import { videos as mockVideos } from "./videos";


function App() {
  const [videos, setVideos] = useState(mockVideos)

  return (
    <>
      <Search />
      <VideoDashboard videos={videos} />
    </>
  )
}

export default App

