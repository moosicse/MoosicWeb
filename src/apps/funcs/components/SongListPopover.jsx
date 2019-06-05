import React from 'react';
import {Button, List, Popover} from 'antd';
import {observer} from 'mobx-react';
import SingerStore from '../stores/SingerStore';
import AlbumStore from '../stores/AlbumStore';
import PlaylistStore from '../stores/PlaylistStore';
import SongListComponent from './SongListComponent';


@observer
class SongListPopover extends React.Component {
  render() {
    const {buttonLabel, playlist} = this.props;

    return (
      <Popover
        content={
          <SongListComponent playlist={playlist}/>
        }
        title={buttonLabel}
        placement="left"
      >
        <Button size="small" type="primary">{buttonLabel}</Button>
      </Popover>
    );
  }
}

export default SongListPopover;