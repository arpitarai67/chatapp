import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
 
  return(
    <div style={{height: '100vh'}}>
      <PrettyChatWindow
        projectId="
        b38745e7-c6c1-4b9c-98ed-087fb899326e"
        username={props.user.username}
        secret={props.user.secret}
        style={{height : '100%'}}
        />

        
      
     
    </div>
    
  )
}

export default ChatsPage

