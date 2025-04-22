address = "https://www.eminem.com/song/dead-wrong/";
var counter = -1;
		var song = app.ReadFile( "song.txt" ).split("\n");
//Called when application is started.
function OnStart()
{
app.TextToSpeech( '<!-- Original: Some "text" with 5 < 6 & 4 > 8 in it --><speak>Some &quot;text&quot; with 5 &lt; 6 &amp; 4 &gt; 8 in it</speak>' )
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "",-1,-1,"multiline,left" )
	txt.SetTextSize( 16 )
	lay.AddChild( txt )
	/*
	web = app.CreateWebView( 0, 0, "IgnoreSSLErrors, IgnoreErrors");
	web.SetOnProgress((progress) => {
    if (progress == 100) {
        web.Execute("document.body.innerText;", (response) => {
            for (let c = 0; c < response.split("\n").length; c++) {
                app.TextToSpeech(response.split("\n")[c], 1, 1);/*, () => {
                    txt.SetHtml(response.split("\n")[c]);
                });*/
    //        }
   //     }); // Closing parenthesis for web.Execute
  //  }
//}); // Closing parenthesis for web.SetOnProgress

	//web.SetOnProgress( (progress)=>{	if(progress==100) {web.Execute( "document.body.innerText;", (response)=>{for(c=0;c<response.split("\n").length;c++) {app.TextToSpeech( response.split("\n")[c], 1,1,()=>{txt.SetHtml( response.split("\n")[c] )}}))}))} )
	//lay.AddChild( web )
	//Add layout to app.	
	app.AddLayout( lay )
	Sing();
	//web.LoadUrl( "song.txt" );
//app.HttpRequest( "GET", address, null, null, handleReply );
}
		
    Sing = function()
    {
        counter+=1;
        app.ShowPopup( song[counter] );
        txt.SetHtml(song[counter] );
        app.TextToSpeech( song[counter], 1, 1, ()=>{if(counter<song.length) self.Sing();} );
    }
function handleReply( error, reply )
{
    if( error ) alert( reply );
    else
    {
    web.LoadHtml( reply );
        /*var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
        alert( funfact );*/
    }
}