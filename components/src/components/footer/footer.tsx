import React from 'react';
const RssLogo = new URL('../../../public/rs_school_js.svg', import.meta.url).href;

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <a href="https://rs.school/react/">
          <img src={RssLogo} alt="RSS Logo" />
        </a>
        <h3>©2023</h3>
      </footer>
    );
  }
}
