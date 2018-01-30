/* import actions */
import axios from 'axios';


class ChatApi {

  /* firt entry */
  constructor() {
    this.req = axios.create({
      baseURL: global.conf.apiServer
    });
  }


  /* Fetch all chat */
  fetchAllChats(success){
    this.req.get('/api/chat.json').then((response)=>{
      success(response.data);
    }).catch((err)=>{
      success(null, err);
    });
  }


}

//Export default
export default ChatApi;
