import React from 'react';
import {observer} from 'mobx-react';
import {Popover, Input, Button} from 'antd';
import PlaylistStore from '../stores/PlaylistStore';


@observer
class CreatePlaylistPopover extends React.Component {
  render() {
    return (
      <Popover content={
        <Input.Search placeholder="歌单名字" onSearch={
          value => PlaylistStore.createPlaylist(value)
        } enterButton />
      } title="创建歌单">
      <Button type="primary">新建</Button>
  </Popover>
    );
  }
}

export default CreatePlaylistPopover;