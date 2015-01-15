var React = require('react'),
    
    Reflux = require('reflux'),
    UserStore = require('./stores/UserStore.js'),
    CharacterActions = require('./actions/CharacterActions.js'),
    RouteActions = require('./actions/RouteActions.js'),
    
    HFRouteWrapper = require('./components/HFRouteWrapper.jsx'),
    HFPage = require('./components/HFPage.jsx');


var CharacterEditor = React.createClass({
  
  statics: {
    willTransitionTo: function (transition) {
      if (!UserStore.isLoggedIn()) transition.redirect("home");
    }
  },
  
  render: function() {
    var character = this.props.character;
    return (
      <HFRouteWrapper className="hf-mode page" user={this.props.user} title={character.name} subtitle="Editing">
        <HFPage>
          {(character) ?
              <h4><strong>Editing a character called {character.name}</strong></h4>
              :
              <p>Error, can't load character</p>}
              
          <div id="lipsum">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat neque congue varius porta. Suspendisse euismod nisl massa, ut condimentum dui faucibus id. Duis mattis, sapien a facilisis tristique, est diam blandit mi, sed cursus tortor felis eget ligula. </p>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean justo felis, malesuada eget quam sed, vulputate condimentum turpis. </p>
            <p>Aliquam erat volutpat. Aenean faucibus, felis ac consectetur congue, nisi nunc malesuada odio, a iaculis ante purus a massa. Suspendisse semper pretium sapien, in viverra nibh. Phasellus commodo eget purus non bibendum. Vivamus id convallis odio. Fusce quis augue vestibulum, vehicula dolor in, dignissim justo. Sed vitae blandit sem, eu consectetur ante. Praesent commodo, ipsum ac sagittis malesuada, justo neque rhoncus velit, ut ultrices arcu ex id nunc.</p>
            <p>Nulla rutrum magna ac tempus sollicitudin. Sed eget venenatis nibh. Integer erat magna, ultrices a massa sit amet, scelerisque ultrices ante. Praesent sit amet scelerisque nunc, ac placerat ante. Nunc consequat enim augue, vitae consequat ligula bibendum non. Quisque egestas felis et ipsum condimentum tempus. Integer gravida ligula porta, tincidunt nisl in, rutrum metus.</p>
            <p>Quisque eu velit non urna porttitor malesuada nec interdum mauris. Morbi nec porta ex. Fusce porta magna ac tortor lobortis mattis. Vivamus elementum fringilla mi. Curabitur maximus, felis ac fermentum maximus, urna nisl blandit purus, at elementum nisl justo at neque. Nunc fermentum ante lorem, nec placerat odio rhoncus sit amet. Phasellus vitae nisl gravida, pretium ex sed, semper enim. Sed diam justo, euismod at iaculis sit amet, ullamcorper ut urna. Nunc porttitor bibendum eros, mattis volutpat elit ornare non.</p>
          </div>
          
        </HFPage>
      </HFRouteWrapper>
    );
  }
  
});

module.exports = CharacterEditor;