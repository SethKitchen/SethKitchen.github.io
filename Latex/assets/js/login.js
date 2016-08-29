var loginRef=new Firebase('https://flickering-fire-5865.firebaseio.com/');
var myUserId=null;

//Handle Login
function onLoginButtonClicked() 
{
	var authClient=new FirebaseAuthClient(loginRef);
	authClient.login("facebook",function(err,token,userInfo)
	{
		myUserId=userInfo.id;
		$("loginDiv").text(userInfo.first_name+" "+userInfo.last_name);
	});
}