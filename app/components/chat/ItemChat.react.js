/* Import default */
import React from 'react';

/* Class */
class ItemChat extends React.Component {
  /* Constructor */
  constructor() {
    //Super
    super();
  }

  /* Render */
  render() {
    var item = this.props.info;
    return (<div className="column">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png"/>
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{item.name}</strong>
              <small>@{item.name}</small>
              <small> 31m</small>
              <br/>
              <small><i className="fa fa-check"></i></small> Lorem ipsum dolor sit amet,
            </p>
          </div>

        </div>
        <div className="media-right">
          <button className="delete"></button>
        </div>
      </article>
    </div>);
  }
}

//Export default
export default ItemChat;
