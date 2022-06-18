import classNames from "classnames";
import React from "react";
import { AppContext, UserStatus } from "../App"
import { WeatherType } from "../constants";
import { N } from "../helper";
import { Info } from "./Info";
import { ScrollableComponent } from "./ScrollableComponent";



const MenuSection= (props) => {
    const getContent = () => {
      if (props.scrollable) {
        return (
          <ScrollableComponent className="menu-section-content">
            {props.children}
          </ScrollableComponent>
        );
      }
  
      return (
        <div className="menu-section-content">
          {props.children}
        </div>
      );
    }
  
    return (
      <div id={props.id} className="menu-section">
        <div className="menu-section-title">
          <i className={props.icon} />
          <span className="menu-section-title-text">{props.title}</span>
        </div>
        {getContent()}
      </div>
    )
  }
  

const Weather = () => {
    const getDays = () => {
      return [{
        id: 1,
        name: "Mon",
        temperature: N.rand(60, 80),
        weather: WeatherType.Sunny
      }, {
        id: 2,
        name: "Tues",
        temperature: N.rand(60, 80),
        weather: WeatherType.Sunny
      }, {
        id: 3,
        name: "Wed",
        temperature: N.rand(60, 80),
        weather: WeatherType.Cloudy
      }, {
        id: 4,
        name: "Thurs",
        temperature: N.rand(60, 80),
        weather: WeatherType.Rainy
      }, {
        id: 5,
        name: "Fri",
        temperature: N.rand(60, 80),
        weather: WeatherType.Stormy
      }, {
        id: 6,
        name: "Sat",
        temperature: N.rand(60, 80),
        weather: WeatherType.Sunny
      }, {
        id: 7,
        name: "Sun",
        temperature: N.rand(60, 80),
        weather: WeatherType.Cloudy
      }].map((day) => {
        const getIcon = () => {
          switch (day.weather) {
            case WeatherType.Cloudy:
              return "fa-duotone fa-clouds";
            case WeatherType.Rainy:
              return "fa-duotone fa-cloud-drizzle";
            case WeatherType.Stormy:
              return "fa-duotone fa-cloud-bolt";
            case WeatherType.Sunny:
              return "fa-duotone fa-sun";
          }
        }
        return (
          <div key={day.id} className="day-card">
            <div className="day-card-content">
              <span className="day-weather-temperature">{day.temperature}<span className="day-weather-temperature-unit">°F</span></span>
              <i className={classNames("day-weather-icon", getIcon(), day.weather.toLowerCase())} />
              <span className="day-name">{day.name}</span>
            </div>
          </div>
        );
      });
    }
    return (
      <MenuSection icon="fa-solid fa-sun" id="weather-section" scrollable title="How's it look out there?">
        {getDays()}
      </MenuSection>
    )
  }

const UserStatusButton= (props) => {
    const { userStatus, setUserStatusTo } = React.useContext(AppContext);
  
    const handleOnClick = () => {
      setUserStatusTo(props.userStatus);
    }
  
    return (
      <button
        id={props.id}
        className="user-status-button clear-button"
        disabled={userStatus === props.userStatus}
        type="button"
        onClick={handleOnClick}
      >
        <i className={props.icon} />
      </button>
    )
  }

  const Reminder = () => {
    return (
      <div className="reminder">
        <div className="reminder-icon">
          <i className="fa-regular fa-bell" />
        </div>
        <span className="reminder-text">Extra cool people meeting <span className="reminder-time">10AM</span></span>
      </div>
    )
  }
  
  
const QuickNav = () => {
    const getItems = ()=> {
      return [{
        id: 1,
        label: "Weather"
      }, {
        id: 2,
        label: "Food"
      }, {
        id: 3,
        label: "Apps"
      }, {
        id: 4,
        label: "Movies"
      }].map((item) => {
        return (
          <div key={item.id} className="quick-nav-item clear-button">
            <span className="quick-nav-item-label">{item.label}</span>
          </div>
        );
      })
    }
  
    return (
      <ScrollableComponent id="quick-nav">
        {getItems()}
      </ScrollableComponent>
    );
  }

  
const Restaurants = () => {
    const getRestaurants = ()=> {
      return [{
        desc: "The best burgers in town",
        id: 1,
        image: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Burgers"
      }, {
        desc: "The worst ice-cream around",
        id: 2,
        image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Ice Cream"
      }, {
        desc: "This 'Za be gettin down",
        id: 3,
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Pizza"
      }, {
        desc: "BBQ ain't need no rhyme",
        id: 4,
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFyYmVxdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "BBQ"
      }].map((restaurant) => {
        const styles = {
          backgroundImage: `url(${restaurant.image})`
        }
  
        return (
          <div key={restaurant.id} className="restaurant-card background-image" style={styles}>
            <div className="restaurant-card-content">
              <div className="restaurant-card-content-items">
                <span className="restaurant-card-title">{restaurant.title}</span>
                <span className="restaurant-card-desc">{restaurant.desc}</span>
              </div>
            </div>
          </div>
        )
      });
    }
    return (
      <MenuSection icon="fa-regular fa-pot-food" id="restaurants-section" title="Get it delivered!">
        {getRestaurants()}
      </MenuSection>
    )
  }

  
const Tools = () => {
    const getTools = () => {
      return [{
        icon: "fa-solid fa-cloud-sun",
        id: 1,
        image: "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        label: "Weather",
        name: "Cloudly"
      }, {
        icon: "fa-solid fa-calculator-simple",
        id: 2,
        image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Calc",
        name: "Mathio"
      }, {
        icon: "fa-solid fa-piggy-bank",
        id: 3,
        image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Bank",
        name: "Cashy"
      }, {
        icon: "fa-solid fa-plane",
        id: 4,
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        label: "Travel",
        name: "Fly-er-io-ly"
      }, {
        icon: "fa-solid fa-gamepad-modern",
        id: 5,
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Games",
        name: "Gamey"
      }, {
        icon: "fa-solid fa-video",
        id: 6,
        image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpZGVvJTIwY2hhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Video Chat",
        name: "Chatty"
      }].map((tool) => {
        const styles = {
          backgroundImage: `url(${tool.image})`
        }
  
        return (
          <div key={tool.id} className="tool-card">
            <div className="tool-card-background background-image" style={styles} />
            <div className="tool-card-content">
              <div className="tool-card-content-header">
                <span className="tool-card-label">{tool.label}</span>
                <span className="tool-card-name">{tool.name}</span>
              </div>
              <i className={classNames(tool.icon, "tool-card-icon")} />
            </div>
          </div>
        );
      })
    }
  
    return (
      <MenuSection icon="fa-solid fa-toolbox" id="tools-section" title="What's Appening?">
        {getTools()}
      </MenuSection>
    );
  }

  const Movies= () => {
    const getMovies = ()=> {
      return [{
        desc: "A tale of some people watching over a large portion of space.",
        id: 1,
        icon: "fa-solid fa-galaxy",
        image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Protectors of the Milky Way"
      }, {
        desc: "Some people leave their holes to disrupt some things.",
        id: 2,
        icon: "fa-solid fa-hat-wizard",
        image: "https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Hole People"
      }, {
        desc: "A boy with a dent in his head tries to stop a bad guy. And by bad I mean bad at winning.",
        id: 3,
        icon: "fa-solid fa-broom-ball",
        image: "https://images.unsplash.com/photo-1632266484284-a11d9e3a460a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Pot of Hair"
      }, {
        desc: "A long drawn out story of some people fighting over some space. Cuz there isn't enough of it.",
        id: 4,
        icon: "fa-solid fa-starship-freighter",
        image: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Area Fights"
      }].map((movie) => {
        const styles = {
          backgroundImage: `url(${movie.image})`
        }
  
        const id = `movie-card-${movie.id}`;
  
        return (
          <div key={movie.id} id={id} className="movie-card">
            <div className="movie-card-background background-image" style={styles} />
            <div className="movie-card-content">
              <div className="movie-card-info">
                <span className="movie-card-title">{movie.title}</span>
                <span className="movie-card-desc">{movie.desc}</span>
              </div>
              <i className={movie.icon} />
            </div>
          </div>
        );
      })
    }
  
    return (
      <MenuSection icon="fa-solid fa-camera-movie" id="movies-section" scrollable title="Popcorn time!">
        {getMovies()}
      </MenuSection>
    );
  }

export const Menu = () => {
    return (
      <div id="app-menu">
        <div id="app-menu-content-wrapper">
          <div id="app-menu-content">
            <div id="app-menu-content-header">
              <div className="app-menu-content-header-section">
                <Info id="app-menu-info" />
                <Reminder />
              </div>
              <div className="app-menu-content-header-section">
                <UserStatusButton
                  icon="fa-solid fa-arrow-right-from-arc"
                  id="sign-out-button"
                  userStatus={UserStatus.LoggedOut}
                />
              </div>
            </div>
            <QuickNav />
            <a id="youtube-link" className="clear-button" href="https://www.youtube.com/c/Hyperplexed?sub_confirmation=1" target="_blank">
              <i className="fa-brands fa-youtube" />
              <span>Hyperplexed</span>
            </a>
            <Weather />
            <Restaurants />
            <Tools />
            <Movies />
          </div>
        </div>
      </div>
    )
  }