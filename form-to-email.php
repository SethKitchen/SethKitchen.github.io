<?php

if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form";
}
echo "hello";
$name=$_POST['demo-name'];
$visitor_email=$_POST['demo-email'];
//$category=$POST['demo-category'];
$message=$_POST['demo-message'];
$copy=$_POST['demo-copy'];
$human=$_POST['demo-human'];

//Validate
if($human!='Yes')
{
	echo "You must declare you are human!";
	exit;
}

if(empty($name) || empty($visitor_email) || empty($message))
{
	echo "Name, email, and message are mandatory!";
	exit;
}

$email_from='sjkyv5@mst.edu';
$email_subject="New Form Submission";
$email_body="You have received a new message from user $name.\n".
			"Category: idk".
			"email address: $visitor_email\n".
			"Here is the message:\n $message".
$to = 'sjkyv5@mst.edu';
$headers ="From: $email_from \r\n";
mail($to,$email_subject,$email_body,$headers);

if($copy=='Yes')
{
	$email_from='sjkyv5@mst.edu';
	$email_subject="New Form Submission";
	$email_body="You have received a new message from user $name.\n".
				"Category: idk".
				"email address: $visitor_email\n".
				"Here is the message:\n $message".
	$to = 'sjkyv5@mst.edu';
	$headers ="From: $email_from \r\n";
	mail($visitor_email,$email_subject,$email_body,$headers);
}

?>