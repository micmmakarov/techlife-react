import React from "react";

export class EpisodeDetails extends React.Component {

  render() {

    console.log(item);
    let item = this.props.selectedItem || {};

    return (

      <div>
        <h3><span className="small-caps date">12 декабря 2018 г.</span></h3>
        <h2>№{item.episodeNum} {item.title}</h2>
        <p className="m-b-2"><a href="#"><span className="mask-link-style"><img src="/images/icon-download.svg" alt="Download" /> </span>Скачать</a></p>
        <div className="player">
          <p id="play" className="btn-play">Play</p>
        </div>

        <section className="episode-desc">
          <div dangerouslySetInnerHTML={{__html: item.description}}></div>
        </section>

      </div>
    )
  }
}

export default EpisodeDetails;
