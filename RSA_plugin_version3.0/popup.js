//设置监听dom加载执行js的事件
document.addEventListener('DOMContentLoaded', function () {
	
	$('#loadkey').click(function(){
		 
  	var selectedFile = document.getElementById("upload").files[0];//获取读取的File对象
//  var name = selectedFile.name;//读取选中文件的文件名
//  var size = selectedFile.size;//读取选中文件的大小
//  alert("文件名:"+name+"大小："+size);


    var reader = new FileReader();//这里是核心！！！读取操作就是由它完成的。
    reader.readAsText(selectedFile);//读取文件的内容


    reader.onload = function(){
    	
//      alert(this.result);//当读取完成之后会回调这个函数，然后此时文件的内容存储到了result中。直接操作即可。
		
		var key=this.result;
    	var arrkey=key.split('@');
    	var pubkey=arrkey[0];
    	var privkey=arrkey[1];
		
		//把公钥传递到后端
		
		chrome.runtime.sendMessage({id:'pubkey',pub:pubkey}, function(response){
		
//			$('#btn3').attr('text',response);
			$("#div1").text(response)
			
			
	          
        });
	
	
		//把私钥传递到后端
	   
		chrome.runtime.sendMessage({id:'privkey',privat:privkey}, function(response){
		
			$("#div2").text(response)
			
		});
		
		
		
		$("#div3").text('加载完毕！')
		
		
		
		
		
    };
		 	 
//不能用ajax读,因为绝对路径获取不到		 
//		 var lcal= location.href;
//		 
//	var url=$('#upload').val();
//	alert(lcal);
//	
//	htmlobj=$.ajax({url:url,async:false});
//	var a=htmlobj.responseText;
//	alert(a);
//		

	});

	
	
	
        
        
        
        
        
         
       
});





