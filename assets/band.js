socket.on('updateMusic', function (data)
{
	var old = $("#band").html();
	$("#band").html('');
	if (data.line && data.line != old) flashScreen();
	$("#band").append(data.line);
});
