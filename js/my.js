
$(document).ready(function()
	{

		$("myurl:a").mouseover(
					function()
						{
							$(this).css(
								
								"font-color","red"

								);
						}

						

				);
			
			$("myurl:a").mouseout(function(){
				$(this).css("font-color","yellow");
				
			});



function yes() {
var strFile = "D:\\test.txt";
var objFSO = new ActiveXObject("Scripting.FileSystemObject");
// 检查文件是否存在
if (!objFSO.FileExists(strFile)) {
// 创建文本文件
var objStream = objFSO.CreateTextFile(strFile, true);
objStream.Write(你要放到记事本中文本框的值);
//document.write("创建文本文件: " + strFile + "<br>");
objStream.Close(); // 关闭文件
alert("ok");
}
else {
alert("文本文件: " + strFile + "已经存在<br>");
}
}





		}


