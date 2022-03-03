import {useRef, useEffect} from 'react'
import ChannelMessage, {Mention} from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

function ChannelData() {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(()=>{
    const div=messagesRef.current
    if(div)
    div.scrollTop = div.scrollHeight
  }, [messagesRef])

  return <Container>
    <Messages ref={messagesRef}>
      {Array.from(Array(25).keys()).map((n)=>(
        <ChannelMessage
        key ={n}
        author='Nycolas Ramos'
        date='31/08/2022'
        content='Meu aniversário'
      />
      ))}

      <ChannelMessage
        author='Nycolas Ramos'
        date='31/08/2022'
        content='Meu aniversário'
      />

      <ChannelMessage
        author='Davi Ramos'
        date='27/04/2022'
        content={
          <>
            <Mention>@Nycolas Ramos</Mention>, tu é fei demais moss.
          </>
        }
        hasMention isBot
      />
    </Messages>

    <InputWrapper>
        <Input type="text" placeholder="Conersar em #chat-livre" />
        <InputIcon />
    </InputWrapper>
  </Container>;
}

export default ChannelData;
