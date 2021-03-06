
var React = require('react/addons'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    sugar = require('sugar'),
    
    Router = require('react-router'),
    Route         = Router.Route,
    NotFoundRoute = Router.NotFoundRoute,
    DefaultRoute  = Router.DefaultRoute,
    
    HeroForge = require("./app/HeroForge.jsx"),
    CharacterList   = require("./app/CharacterList.jsx"),
    CharacterEditor = require("./app/CharacterEditor.jsx"),
    CharacterPlayer = require("./app/CharacterPlayer.jsx");
    Spellbook       = require("./app/Spellbook.jsx");


// For browser react tools
window.React = React;

// Fix touch events
injectTapEventPlugin();

// SugarJS Extensions
Object.extend();


var routes = (
  <Route name="home" handler={HeroForge} path="/">
    <DefaultRoute handler={CharacterList} />
    <Route name="editor" route="editor" handler={CharacterEditor} />
    <Route name="player" route="player" handler={CharacterPlayer} />
    <Route name="spellbook" route="spellbook" handler={Spellbook} />
    <NotFoundRoute handler={CharacterList}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});