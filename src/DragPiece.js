import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';
import './App.css';

const pieceSource = {
  beginDrag(props) {
    const item = { id: props.id };
    return item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      //Decided not to move piece maybe
      return;
    }
    const item = monitor.getItem();
    return props.handle_drag_end(item.id);
  }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
}

class ReactPiece extends React.Component {
  componentDidMount() {
    const img = new Image(46, 46);
    img.src = this.props.url;
    img.onload = () => this.props.connectDragPreview(img);
  }

  render() {
    var url = this.props.url
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
    <div className = "piece_container" onClick = {() => this.props.handle_click_start()}>
      <img src={url} alt ='' className = "react_piece" style={{
        opacity: 1,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}>
      </img>
    </div>
    );
  }
  }

ReactPiece.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.PIECE, pieceSource, collect)(ReactPiece);







