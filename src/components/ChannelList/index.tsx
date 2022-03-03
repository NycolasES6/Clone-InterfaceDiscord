import { Container, Category, AddACategoryIcon } from './styles';
import ChannelButton from '../ChannelButton'
const ChannelList: React.FC = () => {
  return (
  <Container>
    <Category>
      <span>Canais de texto</span>
      <AddACategoryIcon />
    </Category>

    <ChannelButton channelName="Chat-livre"/>
    <ChannelButton channelName="Trabalho"/>
    <ChannelButton channelName="Lolzinho"/>
    <ChannelButton channelName="CSGO"/>
    <ChannelButton channelName="Valorant"/>
  </Container>
    );
}

export default ChannelList;