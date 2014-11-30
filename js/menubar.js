$('#menubar').html('<div class="container">'+
	'<div class="navbar-header">'+
		'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'+
			'<span class="sr-only">Toggle navigation</span>'+
			'<span class="icon-bar"></span>'+
			'<span class="icon-bar"></span>'+
			'<span class="icon-bar"></span>'+
		'</button>'+
		'<a class="navbar-brand" href="http://www.anneveinberg.com">Anne Veinberg</a>'+
	'</div>'+
	'<div id="navbar" class="navbar-collapse collapse">'+
		'<ul class="nav navbar-nav">'+
			'<li id="menu_home"><a href="index.html">Home</a></li>'+
			'<li id="menu_about"><a href="about.html">About</a></li>'+
			'<li id="menu_news"><a href="news.html">News</a></li>'+
			'<li class="dropdown">'+
				'<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Calendar <span class="caret"></span></a>'+
				'<ul class="dropdown-menu" role="menu">'+
					'<li><a href="#">Upcoming</a></li>'+
					'<li class="divider"></li>'+
					'<li><a href="#">2012</a></li>'+
					'<li><a href="#">2013</a></li>'+
					'<li><a href="#">2014</a></li>'+
				'</ul>'+
			'</li>'+
			'<li><a href="#photos">Photos</a></li>'+
			'<li id="menu_listen"><a href="listen.html">Listen</a></li>'+
			'<li class="dropdown">'+
				'<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Ensembles <span class="caret"></span></a>'+
				'<ul class="dropdown-menu" role="menu">'+
					'<li><a href="#">Off&lt;&gt;zz</a></li>'+
					'<li><a href="#">SCALA</a></li>'+
					'<li><a href="#">Duo Kolthof/Veinberg</a></li>'+
					'<li><a href="#">Duo Neshomme</a></li>'+
					'<li><a href="#">Duo H|A</a></li>'+
				'</ul>'+
			'</li>'+
			'<li id="menu_contact"><a href="contact.html">Contact</a></li>'+
		'</ul>'+
	'</div><!--/.nav-collapse -->'+
'</div>');
