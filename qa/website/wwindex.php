<!-- index.html -->
    <!DOCTYPE html>
    <html ng-app="wealthwayApp">
    <head>
      <!-- SCROLLS -->
      <!-- load bootstrap and fontawesome via CDN -->
      <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
      <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" />

      <!-- SPELLS -->
      <!-- load angular and angular route via CDN -->
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
          <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
      <script src="js/script.js"></script>
    </head>
    <body ng-controller="mainController">

        <!-- HEADER AND NAVBAR -->
        <header>
            <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">
                    	<img src="http://record.binary.com/_iGtgKNpBy3-W9NmlZzIzBhWYwxm84YXu/1//?creative_id=2187">WealthWay Investments Pty (Ltd)
                    </a>
                </div>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><i class="fa fa-home"></i> Application</a></li>
                    <li><a href="#about"><i class="fa fa-shield"></i> Pricing</a></li>
                    <li><a href="#contact"><i class="fa fa-comment"></i> Questions</a></li>
                    <li><a href="#login"><i class="fa fa-comment"></i> Login</a></li>
                </ul>
            </div>
            </nav>
        </header>

        <!-- MAIN CONTENT AND INJECTED VIEWS -->
        <div id="main">
			 <div ng-view></div>
            <!-- angular templating -->
            <!-- this is where content will be injected -->

        </div>

    </body>
    </html>