import React, { Component } from "react";

class CardImage extends Component {
  render() {
    const { img, title, content, tag, onPostClick } = this.props;

    let hide = "";
    if (!content) {
      hide = "hide";
    }

    return (
      <div className="col s12 m4">
        <a href={tag} onClick={() => onPostClick(tag, title)}>
          <div className="card hoverable long">
            <div className="card-image">
              <img src={require("../imgs/" + img)} alt="icon" />
              <span className="card-title">{title}</span>
            </div>
            <div className={"card-content " + hide}>
              <p>{content}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default CardImage;
