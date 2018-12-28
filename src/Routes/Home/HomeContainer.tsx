import * as React from "react";
import HomePresenter from "./HomePresenter";

interface IState {
  query: string;
  list: string[][];
}

class HomeContainer extends React.Component<IState> {
  public state = {
    date: "2018-12-27",
    list: [
      {
        host: "https://torrenthaja.com",
        image_path: "/eyoom/theme/basic2/image/twitter.png",
        name: "토렌트하자",
        search_path: "/bbs/search.php?search_flag=search&stx=",
        status: false
      },
      {
        host: "https://torrentwal.net",
        image_path: "/img/torrent.png",
        name: "토렌트왈",
        search_path: "/bbs/s.php?q=&k=",
        status: false
      },
      {
        host: "https://torrentboza.com",
        image_path: "/img/logo-toboja.gif",
        name: "토렌트보자",
        search_path:
          "/bbs/search.php?url=https%3A%2F%2Ftorrentboza.com%2Fbbs%2Fsearch.php&stx=",
        status: false
      },
      {
        host: "https://www.torrentmap.com",
        image_path: "/img/logo.png?v=4",
        name: "토렌트맵",
        search_path: "/search.php?stx=",
        status: false
      },
      {
        host: "https://torrentpong.com",
        image_path: "/img/logo.png",
        name: "토렌트퐁",
        search_path:
          "/bbs/search.php?stx=&url=https%3A%2F%2Ftorrentpong.com%2Fbbs%2Fsearch.php&sop=or&q=",
        status: false
      },
      {
        host: "http://totoria.co",
        image_path: "/thema/Miso-LTE/assets/img/sns_fb.png",
        name: "토토리아",
        search_path:
          "/bbs/search.php?url=http%3A%2F%2Ftotoria.co%2Fbbs%2Fsearch.php&stx=",
        status: false
      },
      {
        host: "https://joymaxim.com",
        image_path: "/img/no_profile.gif",
        name: "조이맥심",
        search_path:
          "/bbs/search.php?sfl=wr_subject%7C%7Cwr_content&sop=and&stx=",
        status: false
      },
      {
        host: "https://torrentlin.com",
        image_path: "/img/logo.png",
        name: "토렌트린",
        search_path:
          "/search.php?stx=",
        status: false
      },
      {
        host: "https://torrentpan.net",
        image_path: "/img/logo-tp.gif",
        name: "토렌트린",
        search_path:
          "/bbs/search.php?url=https%3A%2F%2Ftorrentpan.net%2Fbbs%2Fsearch.php&stx=",
        status: false
      }
    ],
    query: ""
  };

  public onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public onKeyPress = (event: React.KeyboardEvent<KeyboardEvent>) => {
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
        list={this.state.list}
        date={this.state.date}
      />
    );
  }

  public componentDidMount = () => {
    this.isSiteOnline(this.state.list, 0);
  };
  private searchTorrent = () => {
    if (this.state.query === "") {
      return;
    }

    const list = [...this.state.list.filter(item => item.status)];
    const query = this.state.query;

    if (list.length < 1) {
      alert("all of sites are offline");
    } else {
      const index = Math.floor(Math.random() * list.length);
      window.open(list[index].host + list[index].search_path + query);
    }
  };

  private isSiteOnline = (list, index) => {
    if (!list[index]) {
      return;
    }
    // try to load favicon
    const timer = setTimeout(() => {
      // timeout after 5 seconds
    }, 5000);

    const img = document.createElement("img");
    img.onload = () => {
      clearTimeout(timer);
      const nextState = Object.assign({}, this.state);
      nextState.list[index].status = true;
      this.setState(nextState);
      // list[index].status = true;
    };

    img.onerror = () => {
      clearTimeout(timer);
      const nextState = Object.assign({}, this.state);
      nextState.list[index].status = false;
      this.setState(nextState);
      // list[index].status = false;
    };

    this.isSiteOnline(list, index + 1);

    img.src = list[index].host + list[index].image_path;
  };
}
export default HomeContainer;
