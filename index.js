var output;
function getHome()
{
	output =  "";
	document.getElementById("details").innerHTML = output;
}

function getContacts()
{
	output = "<p><h2><center>Contacts</center></h2></p> \
	<center><p>Checkout my Github at <a href=\"https://github.com/avc2120\">https://github.com/avc2120</a><br> \
	Follow me on <a href=\"http://www.justanartblog.tumblr.com\">justanartblog.tumblr.com</a><br> \
	Contact me at <a href=\"mailto:avc2120@columbia.edu\">avc2120@columbia.edu</a></center></p>";
	document.getElementById("details").innerHTML = output;
}

function getEducation()
{
	output = "<p><h2><center>Education</center></h2></p> \
	<center><p>High School: <a href=\"http://www.tas.edu.tw\"> Taipei American School</a></p></center> \
	<center><p>College:<a href=\"http://www.columbia.edu\"> Columbia University in the City of New York</a></p></center>";
	document.getElementById("details").innerHTML = output;
}

function getResearch()
{
	output = "<p><h2><center>Research</center></h2></p> \
	<center><p>Distributed Research Experience for Undergraduates (DREU): <a href=\"Dreu/index.html\"> DREU</a></p></center>";
	document.getElementById("details").innerHTML = output;
}

function getProjects()
{
	output = "<p><h2><center>Projects</center></h2></p> \
	<center> \
	<a href= \"Flickr/index.html\">Flickr Search</a><br> \
	<a href= \"Commentator/index.html\">Commentator</a><br> \
	<a href= \"PAD/index.html\">Puzzle and Dragons Rank Up </a><br> \
	<a href = \"Paperback/index.html\">PaperBack</a> \
	</center>";
	document.getElementById("details").innerHTML = output;
}
