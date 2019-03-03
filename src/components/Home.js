import React from "react";
import EpisodeDetailsInline from "./EpisodeDetailsInline";

export class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showComponent: false,
      latestEpisodeNum: null,
      selectedEpisodeNum: null,
      selectedItem: null
    };
  }

  itemSelected (itemObject) {
    // get item with the given episode number
    var selectedItem = this.props.appState.items.find(obj => {
      return obj.episodeNum === itemObject;
    });

    this.setState({
      showComponent: true,
      selectedEpisodeNum: itemObject,
      latestEpisodeNum: this.props.appState.items.length,
      selectedItem: selectedItem
    });
  }

  render() {

    const { isLoaded, items } = this.props.appState;
  
    if (!isLoaded) {

      return <div>Loading...</div>

    } else {

      let episodes = items;

      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">

              <h2>Наши выпуски</h2>

              <EpisodeDetailsInline itemData={this.state.selectedItem} />

              <ul className="episode-list">
                {episodes.map(item => (
                  <li key="{index}"><span className='episode-num'>№{item.episodeNum}</span> <a href="javascript:void(0)" onClick={() => this.itemSelected(item.episodeNum)}>{item.title}</a>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      );
    }

  }
}

export default Home;
