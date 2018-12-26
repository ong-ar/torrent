import * as React from "react";
import HomePresenter from "./HomePresenter";

interface IState {
  query: string;
  list: string[][];
}

class HomeContainer extends React.Component<IState> {
  public state = {
    list: [
      {
        host: "https://torrenthaja.com",
        image_path: "/eyoom/theme/basic2/image/twitter.png",
        name: "토렌트하자",

        search_path: "/bbs/search.php?search_flag=search&stx="
      },
      {
        host: "https://torrentwal.net",
        image_path: "/img/torrent.png",
        name: "토렌트왈",
        search_path: "/bbs/s.php?q=&k="
      },
      {
        host: "https://torrentboza.com",
        image_path: "/img/logo-toboja.gif",
        name: "토렌트보자",
        search_path:
          "/bbs/search.php?url=https%3A%2F%2Ftorrentboza.com%2Fbbs%2Fsearch.php&stx="
      },
      {
        host: "https://www.torrentmap.com",
        image_path: "/img/logo.png?v=4",
        name: "토렌트맵",
        search_path: "/search.php?stx=search"
      },
      {
        host: "https://torrentpong.com",
        image_path: "/img/logo.png",
        name: "토렌트퐁",
        search_path:
          "/bbs/search.php?stx=&url=https%3A%2F%2Ftorrentpong.com%2Fbbs%2Fsearch.php&sop=or&q="
      }
    ],
    query: ""
  };

  public onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public onKeyPress = async (event: React.KeyboardEvent<KeyboardEvent>) => {
    if (event.key === "Enter") {
      this.searchTorrent();
    }
  };

  public onClick = () => {
    this.searchTorrent();
  };

  public render() {
    return (
      <HomePresenter
        onClick={this.onClick}
        onInputChange={this.onInputChange}
        onKeyPress={this.onKeyPress}
      />
    );
  }
  private searchTorrent = async () => {
    if (this.state.query === "") {
      return;
    }

    const list = [...this.state.list];
    const query = this.state.query;

    const shuffledlist = this.shuffleArray(list);

    this.isSiteOnline(shuffledlist, query, 0);
  };

  private isSiteOnline = (list, query, index) => {
    if (!list[index]) {
      alert("all of sites are offline!");
      return;
    }
    // try to load favicon
    const timer = setTimeout(() => {
      // timeout after 5 seconds
    }, 5000);

    const img = document.createElement("img");
    img.onload = () => {
      clearTimeout(timer);
      window.open(list[index].host + list[index].search_path + query);
    };

    img.onerror = () => {
      clearTimeout(timer);
      this.isSiteOnline(list, query, index + 1);
    };

    img.src = list[index].host + list[index].image_path;
  };
  private shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
}
export default HomeContainer;
