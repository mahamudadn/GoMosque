import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>This app is designed to help users track and monitor their prayers specifically performed at mosques. 
          It allows users to keep a record of the number of prayers they have offered in mosques over time. This app enables users to evaluate their prayer performance and stay consistent with their religious practices.</p>
      </div>
    </div>
  );
}

export default AboutPage;
