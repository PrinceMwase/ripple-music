import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  state = {
    searchBarClosed: true
  };

  componentDidMount() {
    if (this.props.userId) this.props.getUser(this.props.user.id);
  }

  toggleSearchBar = (event) => {
    event.preventDefault()
    this.setState(prevState => ({
      searchBarClosed: !prevState.searchBarClosed
    }));
  };

  render() {
    if (!this.props.userId) return null;
    const { user, logout } = this.props;
    return (
      <div className="flex-col-start sidebar">
        <div className="sidebar-row">
          <div className="flex-row-center vertical-center sidebar-left-col">
            <i className="fas fa-portrait"></i>
          </div>
          <div className="flex-row-start vertical-center full-width">
            <h5>{`${user.username.slice(0, 10)}...`}</h5>
          </div>
          <div className="flex-row-end vertical-center">
            <button className="logout-button" onClick={() => logout()}>
              <i className="fas fa-power-off"></i>
            </button>
          </div>
        </div>

        <div className="sidebar-break flex-row-start">
          <div className="main-link">
            <form action="#/search" method="get">

            <input type="text" name="search" hidden={this.state.searchBarClosed}
 placeholder="Search" id="search" style={{"backgroundColor":'transparent', "color": "white"}} />

              {/* {this.state.searchBarClosed && <button className="search-button" onClick={(thisEvent) => this.toggleSearchBar(thisEvent)}>
                <i className="fas fa-search"></i> Search
              </button>} */}


             {this.state.searchBarClosed &&  <button className="searchSideRow" onClick={(thisEvent) => this.toggleSearchBar(thisEvent)}>
            <div className="flex-row-center sidebar-left-col">
            <i className="fas fa-search"></i>
            </div>
            <div className="sidebar-center-col">
              <p>Search</p>
            </div>
          </button>}


            </form>
          </div>
        </div>

        <NavLink
          className="sidebar-link main-link"
          to="/dashboard"
          activeClassName="sidebar-active"
        >
          <div className="sidebar-row">Home</div>
        </NavLink>

        <NavLink
          className="sidebar-link main-link"
          to="/explore"
          activeClassName="sidebar-active"
        >
          <div className="sidebar-row">Explore</div>
        </NavLink>

        <div className="sidebar-break">
          <h6 className="silver">My Collection</h6>
        </div>

        <NavLink
          className="sidebar-link"
          exact
          to="/playlists"
          activeClassName="sidebar-active"
        >
          <div className="sidebar-row">
            <div className="flex-row-center sidebar-left-col">
              <i className="fas fa-list-alt"></i>
            </div>
            <div className="sidebar-center-col">
              <p>Playlists</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className="sidebar-link"
          exact
          to="/albums"
          activeClassName="sidebar-active"
        >
          <div className="sidebar-row">
            <div className="flex-row-center sidebar-left-col">
              <i className="fas fa-compact-disc"></i>
            </div>
            <div className="sidebar-center-col">
              <p>Albums</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className="sidebar-link"
          exact
          to="/tracks"
          activeClassName="sidebar-active"
        >
          <div className="sidebar-row">
            <div className="flex-row-center sidebar-left-col">
              <i className="fas fa-music menu-icon"></i>
            </div>
            <div className="sidebar-center-col">
              <p>Tracks</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className="sidebar-link"
          exact
          to="/artists"
          activeClassName="sidebar-active"
        >
          <div className="sidebar-row">
            <div className="flex-row-center sidebar-left-col">
              <i className="fas fa-microphone menu-icon"></i>
            </div>
            <div className="sidebar-center-col">
              <p>Artists</p>
            </div>
          </div>
        </NavLink>
        <div className="sidebar-break">
          <h6 className="silver margin-top">Social Links</h6>
        </div>

        <a
          className="sidebar-link"
          href="http://github.com/jayzizzle"
          target="_blank"
        >
          <div className="sidebar-row">
            <div className="sidebar-left-col">
              <i className="fab fa-facebook"></i>
            </div>
          </div>
        </a>

        <a
          className="sidebar-link"
          href="https://linkedin.com/in/jon-zamora-97a8a6219/"
          target="_blank"
        >
          <div className="sidebar-row">
            <div className="sidebar-left-col">
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </a>
        <a
          className="sidebar-link"
          href="https://linkedin.com/in/jon-zamora-97a8a6219/"
          target="_blank"
        >
          <div className="sidebar-row">
            <div className="sidebar-left-col">
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </a>
        <a
          className="sidebar-link"
          href="https://linkedin.com/in/jon-zamora-97a8a6219/"
          target="_blank"
        >
          <div className="sidebar-row">
            <div className="sidebar-left-col">
              <i className="fab fa-tiktok"></i>
            </div>
          </div>
        </a>
        <a
          className="sidebar-link"
          href="https://linkedin.com/in/jon-zamora-97a8a6219/"
          target="_blank"
        >
          <div className="sidebar-row">
            <div className="sidebar-left-col">
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
