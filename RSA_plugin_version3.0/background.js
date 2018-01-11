var pubkey;
var privatekey;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	// 与popup之间的通信
 	if(message.id=='pubkey'){
	 	
		pubkey=message.pub;
     	sendResponse('公钥已加载···');

	} 
		
		
  	if(message.id=='privkey'){
      	
		privatekey=message.privat;
     	sendResponse('私钥已加载···');

	} 
		
		
	
			
		
	//	与test之间的通信			
	if(message.id=='contentprivkey'){
		sendResponse(privatekey);	      	
	}
	
	
	if(message.id=='contentpubkey'){
		sendResponse(pubkey);	      	
	}
		
		
		
	
			
	      	
	
	      	


			     
});


 	
