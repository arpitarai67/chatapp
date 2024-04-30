import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
 
  return(
    <div style={{height: '100vh'}}>
      <PrettyChatWindow
        projectId=" 
        2070de5e-32da-4ebd-904a-13519f9e8333"
        username={props.user.username}
        secret={props.user.secret}
        style={{height : '100%'}}
        />

    </div>
    
  )
}

export default ChatsPage

