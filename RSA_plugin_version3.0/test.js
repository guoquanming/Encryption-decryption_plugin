//		###################################
			
//获取公钥并进行加密操作
var pubkey;
chrome.runtime.sendMessage({id:'contentpubkey',content:'c'}, function(response){

	pubkey=response;
//	console.log('公钥：'+response);
		
	//设置每一个input框输入内容,移出光标后,自动为该input框中内容转化为密文	
	$('input').blur(function(){
					
		var content=$(this).val()
		
		//加密方法
		var encrypt = new JSEncrypt();
		encrypt.setPublicKey(pubkey);
		var encrypted = encrypt.encrypt(content);
		$(this).val(encrypted);
		console.log($(this).val());
				
	});
	
	
	
	
	
});




//		###################################

//从后端获取到私钥
var privatekey;

chrome.runtime.sendMessage({id:'contentprivkey',content:'c'}, function(response){
	privatekey=response;
//	console.log('私钥：'+response);
							
	//装载私钥
	var decrypt = new JSEncrypt();
	decrypt.setPrivateKey(privatekey)	
	//遍历内容域,解密加密密文,并返回
	$("input").each(function(){
		
		var b=$(this).attr('value');
		var uncrypted = decrypt.decrypt(b);	
		
		console.log(uncrypted);
		if(uncrypted){
				$(this).attr('value',uncrypted);
		};
	
	})
		
		
			
	
	
	
	
		
});

	
				
		
//		###################################


