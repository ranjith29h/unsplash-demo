import React, { useState } from "react";
import Header from "./components/App/Header";
import SearchHandler from "./components/App/SearchHandler";
import useSWRFetch from "./components/hooks/useSWRFetch";
import Loading from "./components/App/Loading";
import Error from "./components/App/Error";
import ImageGallery from "./components/App/ImageGallery";
import PreviewModal from "./components/App/PreviewModal";

function App() {
  const [activeModal, setActiveModal] = useState(false);
  const [activeData, setActiveData] = useState(null);
  const [query, setQuery] = useState(null);
  const url = query ? `/search/photos` : "/photos/random";

  const { data, isLoading, isError } = useSWRFetch(`${url}/?count=20`, query);

  const onToggleModal = (itemId) => {
    setActiveModal((activeModal) => !activeModal);
    if (!activeModal) {
      setActiveData(data.filter((item) => item.id === itemId));
    }
  };

  const handleSubmit = (val) => {
    setQuery(val);
  };

  const handleClear = () => {
    setQuery(null);
  };

  return (
    <div className="App">
      <Header />
      <SearchHandler handleSubmit={handleSubmit} handleClear={handleClear} />
      {isLoading && <Loading />}
      {isError && <Error />}
      {data && <ImageGallery data={data} activeModal={onToggleModal} />}
      {activeData && (
        <PreviewModal
          activeModal={activeModal}
          activeData={activeData}
          onToggleModal={onToggleModal}
        />
      )}
    </div>
  );
}

export default App;
