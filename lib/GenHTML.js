function createHTML(res) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- links -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <title>Company Team</title>
        <style>
            .list-item {
                padding: 3px 5px;
                border: 1px solid rgb(219, 219, 219);
                border-radius: 3px;
                margin: 2px auto;
            }
            .card {
                background-color: rgb(219, 219, 219);
            }
            .card-body {
                background-color: white;
                width: 100%;
                padding: 20px;
            }
            .card-header {
                background-color: rgb(51, 154, 240);
            }
        </style>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Team Page</h1>
            </div>
        </div>
        <div class="row" style="padding: 2rem;">
            <div class="col col-md-3" style="margin: 20px;">
                <div id="appendHere"></div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
        <script src="/cli.js"></script>
    </body>
    
    </html>`
}
