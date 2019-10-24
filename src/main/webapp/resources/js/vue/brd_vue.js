/* https://getbootstrap.com/docs/4.0/examples/offcanvas/ */
var brd_vue = brd_vue || {}
brd_vue = {
	brd_head: x=>{
		return '<head>'+
		'    <meta charset="utf-8">'+
		'    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'    <meta name="description" content="">'+
		'    <meta name="author" content="">'+
		'    <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">'+
		'    <title>Offcanvas template for Bootstrap</title>'+
		'    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/offcanvas/">'+
		'    <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">'+
		'    <link href="offcanvas.css" rel="stylesheet">'+
		'  </head>'
	},
	brd_body: x=>{
		return  '<body class="bg-light">'+
		 '   <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">'+
		 '     <a class="navbar-brand" href="#">Offcanvas navbar</a>'+
		 '     <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">'+
		 '       <span class="navbar-toggler-icon"></span>'+
		 '     </button>'+
		 '     <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">'+
		 '       <ul class="navbar-nav mr-auto">'+
		 '         <li class="nav-item active">'+
		 '           <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>'+
		 '         </li>'+
		 '         <li class="nav-item">'+
		 '           <a class="nav-link" href="#">Notifications</a>'+
		 '         </li>'+
		 '         <li class="nav-item">'+
		 '           <a class="nav-link" href="#">Profile</a>'+
		 '         </li>'+
		 '         <li class="nav-item">'+
		 '           <a class="nav-link" href="#">Switch account</a>'+
		 '         </li>'+
		 '         <li class="nav-item dropdown">'+
		 '           <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>'+
		 '           <div class="dropdown-menu" aria-labelledby="dropdown01">'+
		 '             <a class="dropdown-item" href="#">Action</a>'+
		 '             <a class="dropdown-item" href="#">Another action</a>'+
		 '             <a class="dropdown-item" href="#">Something else here</a>'+
		 '           </div>'+
		 '         </li>'+
		 '       </ul>'+
		 '       <form class="form-inline my-2 my-lg-0">'+
		 '         <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">'+
		 '         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>'+
		 '       </form>'+
		 '     </div>'+
		 '   </nav>'+
		 '   <div class="nav-scroller bg-white box-shadow">'+
		 '     <nav class="nav nav-underline">'+
		 '       <a class="nav-link active" href="#">Dashboard</a>'+
		 '       <a class="nav-link" href="#">'+
		 '         Friends'+
		 '         <span class="badge badge-pill bg-light align-text-bottom">27</span>'+
		 '       </a>'+
		 '       <a class="nav-link" href="#">Explore</a>'+
		 '       <a class="nav-link" href="#">Suggestions</a>'+
		 '       <a class="nav-link" href="#">Link</a>'+
		 '       <a class="nav-link" href="#">Link</a>'+
		 '       <a class="nav-link" href="#">Link</a>'+
		 '       <a class="nav-link" href="#">Link</a>'+
		 '       <a class="nav-link" href="#">Link</a>'+
		 '     </nav>'+
		 '   </div>'+
		 '   <main role="main" class="container">'+
		 '     <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">'+
		 '       <img class="mr-3" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">'+
		 '       <div class="lh-100">'+
		 '         <h6 class="mb-0 text-white lh-100">Bootstrap</h6>'+
		 '         <small>Since 2011</small>'+
		 '       </div>'+
		 '     </div>'+
		 '     <div class="my-3 p-3 bg-white rounded box-shadow">'+
		 '       <h6 class="border-bottom border-gray pb-2 mb-0">Recent updates</h6>'+
		 '       <div class="media text-muted pt-3">'+
		 '         <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="" data-holder-rendered="true">'+
		 '         <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		 '           <strong class="d-block text-gray-dark">@username</strong>'+
		 '           Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
		 '         </p>'+
		 '       </div>'+
		 '       <div class="media text-muted pt-3">'+
		 '         <img data-src="holder.js/32x32?theme=thumb&amp;bg=e83e8c&amp;fg=e83e8c&amp;size=1" alt="32x32" class="mr-2 rounded" src="" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		 '         <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		 '           <strong class="d-block text-gray-dark">@username</strong>'+
		 '           Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
		 '         </p>'+
		 '       </div>'+
		 '       <div class="media text-muted pt-3">'+
		 '         <img data-src="holder.js/32x32?theme=thumb&amp;bg=6f42c1&amp;fg=6f42c1&amp;size=1" alt="32x32" class="mr-2 rounded" src="" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		 '         <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		 '           <strong class="d-block text-gray-dark">@username</strong>'+
		 '           Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
		 '         </p>'+
		 '       </div>'+
		 '       <small class="d-block text-right mt-3">'+
		 '         <a href="#">All updates</a>'+
		 '       </small>'+
		 '     </div>'+
		 '    <div class="my-3 p-3 bg-white rounded box-shadow">'+
		 '       <h6 class="border-bottom border-gray pb-2 mb-0">Suggestions</h6>'+
		 '       <div class="media text-muted pt-3">'+
		 '         <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		 '         <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		 '           <div class="d-flex justify-content-between align-items-center w-100">'+
		 '             <strong class="text-gray-dark">Full Name</strong>'+
		 '             <a href="#">Follow</a>'+
		 '           </div>'+
		 '           <span class="d-block">@username</span>'+
		 '         </div>'+
		 '       </div>'+
		 '       <div class="media text-muted pt-3">'+
		 '         <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		 '         <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		 '           <div class="d-flex justify-content-between align-items-center w-100">'+
		 '             <strong class="text-gray-dark">Full Name</strong>'+
		 '             <a href="#">Follow</a>'+
		 '           </div>'+
		 '           <span class="d-block">@username</span>'+
		 '         </div>'+
		 '       </div>'+
		 '       <div class="media text-muted pt-3">'+
		 '         <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		 '         <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		 '           <div class="d-flex justify-content-between align-items-center w-100">'+
		 '             <strong class="text-gray-dark">Full Name</strong>'+
		 '             <a href="#">Follow</a>'+
		 '           </div>'+
		 '           <span class="d-block">@username</span>'+
		 '         </div>'+
		 '       </div>'+
		 '       <small class="d-block text-right mt-3">'+
		 '         <a href="#">All suggestions</a>'+
		 '       </small>'+
		 '     </div>'+
		 '   </main>'

	},
	login_head : x=>{
		return '  <meta charset="UTF-8">'+
		'  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'  <title>Document</title>'+
		'  <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/checkout/">'+
		'  <head>  '+
		 '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
		'  <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
		'    <meta charset="utf-8">'+
		'    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'    <meta name="description" content="">'+
		'    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
		'    <meta name="generator" content="Jekyll v3.8.5">'+
		'    <title>Signin Template · Bootstrap</title>'+
		'    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/sign-in/">'+
		'    <!-- Bootstrap core CSS -->'+
		'    <style>'+
		'      .bd-placeholder-img {'+
		'        font-size: 1.125rem;'+
		'        text-anchor: middle;'+
		'        -webkit-user-select: none;'+
		'        -moz-user-select: none;'+
		'        -ms-user-select: none;'+
		'        user-select: none;'+
		'      }'+
		'      @media (min-width: 768px) {'+
		'        .bd-placeholder-img-lg {'+
		'          font-size: 3.5rem;'+
		'        }'+
		'      }'+
		'    </style>'+
		'    <!-- Custom styles for this template -->'+
		'    <link href="'+x.css+'/signin.css" rel="stylesheet">'+
		'  </head>'
	},
	login_body : x=>{
		return ' <form id = "form_join" class="form-signin">'+
		'    <img class="mb-4" src="'+x.img+'/bootstrap-solid.svg" alt="" width="72" height="72">'+
		'    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>'+
		'    <label for="inputEmail" class="sr-only">Email address</label>'+
		'    <input type="text" id="uid" class="form-control" placeholder="Email address" required="" autofocus="">'+
		'    <label for="inputPassword" class="sr-only">Password</label>'+
		'    <input type="password" id="pwd" class="form-control" placeholder="Password" required="">'+
		'    <div class="checkbox mb-3">'+
		'      <label>'+
		'      <a id = "a_go_join" href="#">GO JOIN</a>'+
		'      </label>'+
		'    </div>'+
		'    <div id="btn_login"></div>'+
		'    <p class="mt-5 mb-3 text-muted">© 2017-2019</p>'+
		'  </form>'
		
	}	
};